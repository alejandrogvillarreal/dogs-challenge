import React, { Fragment, useContext } from "react";
import { languageContext } from "../../config/language";
import Pagination from "react-js-pagination";

// components
import DogCard from "../Common/DogCard";
import SuccessAlert from "../Common/Alerts/SuccessAlert";
import ErrorAlert from "../Common/Alerts/ErrorAlert";
import Loading from "../Common/Loading";

interface Props {
  addToTeam: (breed: string, image: string) => void;
  dogToAdd: string;
  alert: IAlert;
  breedName: string;
  dogsPerPage: string[];
  page: number;
  totalItemsCount: number;
  loading: boolean;
  selectPage: (pageNumber: number) => void;
}

interface IAlert {
  show: boolean;
  type: "success" | "error";
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  const button = (breed: string, image: string) => {
    const breedName = breed.trim().replace(" ", "-");
    const dogSelected = Boolean(props.dogToAdd === image);

    return (
      <Fragment>
        <button
          className="btn btn-info"
          onClick={() => props.addToTeam(breedName, image)}
        >
          {lang.addToMyTeam}
        </button>
        {Boolean(props.alert.show && dogSelected) &&
          (props.alert.type === "success" ? (
            <SuccessAlert text={lang.successfullyAdded} />
          ) : (
            <ErrorAlert text={lang.errorAdd} />
          ))}
      </Fragment>
    );
  };

  return (
    <div>
      <h1 className="mt-5 mb-5 text-center">{props.breedName}</h1>
      {props.loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="row">
            {props.dogsPerPage.map((dog: string, index: number) => (
              <div className="col-12 col-md-6 col-lg-3 mb-5" key={index}>
                <DogCard
                  dogUrl={dog}
                  breed={props.breedName}
                  showBreed={false}
                  button={button}
                />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-5">
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
