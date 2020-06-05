import React, { Fragment, useContext } from "react";
import { languageContext } from "../../config/language";
import Pagination from "react-js-pagination";

// types
import { IBreedImage } from "../../types/breeds";

// components
import BreedCard from "../Common/BreedCard";
import Loading from "../Common/Loading";

interface Props {
  loading: boolean;
  breedsImages: IBreedImage[];
  totalItemsCount: number;
  page: number;
  selectPage: (pageNumber: number) => void;
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <div>
      <h1 className="mt-5 mb-5 text-center">{lang.breeds}</h1>
      {props.loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="row">
            {props.breedsImages.map(
              (breedImage: IBreedImage, index: number) => {
                const fullBreed = breedImage.name.replace("-", " ");
                const linkTo = breedImage.name;

                return (
                  <div className="col-12 col-md-6 col-lg-3 mb-5" key={index}>
                    <BreedCard
                      breed={fullBreed}
                      image={breedImage.image}
                      linkTo={linkTo}
                    />
                  </div>
                );
              }
            )}
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              itemClass="page-item"
              activeLinkClass="bg-info"
              linkClass="page-link text-dark"
              activePage={props.page}
              prevPageText={lang.previous}
              nextPageText={lang.next}
              itemsCountPerPage={10}
              totalItemsCount={props.totalItemsCount}
              pageRangeDisplayed={5}
              onChange={props.selectPage}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};
