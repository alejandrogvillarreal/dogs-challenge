import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";

// actions
import { getBreedsImages } from "../../redux/actions/breeds.actions";

// types
import { RootState } from "../../types/store";
import { IBreedImage } from "../../types/breeds";

// utils
import getPaginationIndexes from "../../utils/getPaginationIndexes";

// components
import HomeContent from "./Home.content";

interface Props {
  breedsWithSubBreedsList: string[];
  breedsImages: IBreedImage[];
  fetchingBreedsList: boolean;
  fetchingBreedsImages: boolean;
  getBreedsImages: (breedsToGet: string[]) => Promise<void>;
}

const Home = (props: Props) => {
  const [page, setPage] = useState(1);

  const fetchBreedsImages = useCallback(
    (pageNumber: number) => {
      const { indexFrom, indexTo } = getPaginationIndexes(pageNumber);
      const breedsToGet = props.breedsWithSubBreedsList.slice(
        indexFrom,
        indexTo
      );

      props.getBreedsImages(breedsToGet);
    },
    [props.breedsWithSubBreedsList]
  );

  useEffect(() => {
    fetchBreedsImages(page);
  }, [page, props.breedsWithSubBreedsList, fetchBreedsImages]);

  const selectPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const loading = Boolean(
    props.fetchingBreedsList || props.fetchingBreedsImages
  );

  return (
    <HomeContent
      loading={loading}
      breedsImages={props.breedsImages}
      totalItemsCount={props.breedsWithSubBreedsList.length}
      page={page}
      selectPage={selectPage}
    />
  );
};

const mapStateToProps = function (state: RootState, ownProps: any) {
  return {
    breedsWithSubBreedsList: state.breeds.breedsWithSubBreedsList,
    breedsImages: state.breeds.breedsImages,
    fetchingBreedsList: Boolean(state.breeds.fetchingBreedsList > 0),
    fetchingBreedsImages: Boolean(state.breeds.fetchingBreedsImages > 0),
  };
};

const mapDispatchToProps = function (dispatch: any) {
  return {
    getBreedsImages: (breeds: string[]) => dispatch(getBreedsImages(breeds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
