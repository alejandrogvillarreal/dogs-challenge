import React, { useState, useEffect, useMemo, useCallback } from "react";
import { connect } from "react-redux";

// actions
import { getDogs } from "../../redux/actions/dogs.actions";
import { addToTeam } from "../../redux/actions/team.actions";

// types
import { RootState } from "../../types/store";
import { IDogTeam } from "../../types/team";

// utils
import getPaginationIndexes from "../../utils/getPaginationIndexes";

// components
import BreedContent from "./Breed.content";

interface Props {
  match: any;
  dogs: string[];
  breedsOfTeam: any;
  dogsOfTeam: IDogTeam[];
  fetchingDogs: boolean;
  getDogs: (breedName: string) => Promise<void>;
  addToTeam: (breed: string, image: string) => void;
}

interface IAlert {
  show: boolean;
  type: "success" | "error";
}

const Breed = (props: Props) => {
  const [page, setPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState<string[]>([]);
  const [alert, setAlert] = useState<IAlert>({ show: false, type: "success" });
  const [dogToAdd, setDogToAdd] = useState("");

  const breedName = useMemo(() => {
    const name = props.match.params.breed_name;
    const fullBreed = name.replace("-", " ");
    return fullBreed;
  }, [props.match.params]);

  useEffect(() => {
    props.getDogs(breedName);
  }, [breedName]);

  const getDogsPerPage = useCallback(
    (pageNumber: number) => {
      const { indexFrom, indexTo } = getPaginationIndexes(pageNumber);
      const dogsPerPage = props.dogs.slice(indexFrom, indexTo);
      setDogsPerPage(dogsPerPage);
    },
    [props.dogs]
  );

  useEffect(() => {
    getDogsPerPage(page);
  }, [page, props.dogs, getDogsPerPage]);

  const selectPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const canAddToTeam = (breedName: string) => {
    const quantityOfBreed = props.breedsOfTeam[breedName] || 0;
    const quantityOfDogsInTeam = props.dogsOfTeam.length;
    return Boolean(quantityOfBreed < 3 && quantityOfDogsInTeam < 10);
  };

  const addToTeam = (breedName: string, image: string) => {
    const canAdd = canAddToTeam(breedName);
    setDogToAdd(image);
    if (canAdd) {
      props.addToTeam(breedName, image);
      setAlert({ show: true, type: "success" });
    } else {
      setAlert({ show: true, type: "error" });
    }
  };

  return (
    <BreedContent
      dogToAdd={dogToAdd}
      alert={alert}
      addToTeam={addToTeam}
      breedName={breedName}
      dogsPerPage={dogsPerPage}
      page={page}
      selectPage={selectPage}
      loading={props.fetchingDogs}
      totalItemsCount={props.dogs.length}
    />
  );
};

const mapStateToProps = function (state: RootState, ownProps: any) {
  return {
    dogs: state.dogs.dogs,
    fetchingDogs: Boolean(state.dogs.fetchingDogs > 0),
    breedsOfTeam: state.team.breeds,
    dogsOfTeam: state.team.dogs,
  };
};

const mapDispatchToProps = function (dispatch: any) {
  return {
    getDogs: (breedName: string) => dispatch(getDogs(breedName)),
    addToTeam: (breed: string, image: string) =>
      dispatch(addToTeam(breed, image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Breed);
