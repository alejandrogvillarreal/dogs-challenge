import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";

// actions
import { getBreeds } from "../../redux/actions/breeds.actions";

// types
import { RootState } from "../../types/store";
import { IBreed } from "../../types/breeds";

// components
import SidebarContent from "./Sidebar.content";

interface Props {
  breedsList: IBreed[];
  getBreeds: () => Promise<void>;
}

const Sidebar = (props: Props) => {
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    props.getBreeds();
  }, []);

  const breeds = useMemo(() => {
    return props.breedsList.filter((breed: IBreed) => {
      if (breed.name.includes(inputSearch)) {
        return true;
      }
      if (breed.has_sub_breeds) {
        const any_breed_match = breed.sub_breeds.some((sub_breed: string) =>
          sub_breed.includes(inputSearch)
        );
        return any_breed_match ? true : false;
      }
    });
  }, [props.breedsList, inputSearch]);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setInputSearch(value);
  };

  return (
    <SidebarContent
      inputSearch={inputSearch}
      breeds={breeds}
      handleChange={handleChange}
    />
  );
};

const mapStateToProps = function (state: RootState, ownProps: any) {
  return {
    breedsList: state.breeds.breedsList,
  };
};

const mapDispatchToProps = function (dispatch: any) {
  return {
    getBreeds: () => dispatch(getBreeds()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
