import React, { useContext } from "react";
import { languageContext } from "../../config/language";
// types
import { IDogTeam } from "../../types/team";

// components
import DogCard from "../Common/DogCard";

interface Props {
  emptyTeam: boolean;
  dogs: IDogTeam[];
  removeFromTeam: (breed: string, image: string) => void;
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  const button = (breed: string, image: string) => {
    return (
      <button
        className="btn btn-danger"
        onClick={() => props.removeFromTeam(breed, image)}
      >
        {lang.removeFromTeam}
      </button>
    );
  };

  return (
    <div>
      <h1 className="mt-5 mb-5 text-center">{lang.myTeam}</h1>
      {props.emptyTeam ? (
        <h3 className="mt-5 mb-5 text-center">{lang.notHaveDogsOnTeam}</h3>
      ) : (
        <div className="row">
          {props.dogs.map((dog: IDogTeam, index: number) => (
            <div className="col-12 col-md-6 col-lg-3 mb-5" key={index}>
              <DogCard
                dogUrl={dog.image}
                breed={dog.breed.replace("-", " ")}
                showBreed={true}
                button={button}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
