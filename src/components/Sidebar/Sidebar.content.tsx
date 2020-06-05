import React, { Fragment, useContext } from "react";
import { languageContext } from "../../config/language";
import { Link } from "react-router-dom";
import { IBreed } from "../../types/breeds";

// styled components
import { SidebarWrapper, SubBreedsList } from "./Sidebar.styles";

interface Props {
  inputSearch: string;
  breeds: IBreed[];
  handleChange: (event: any) => void;
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);
  return (
    <Fragment>
      <SidebarWrapper className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">
          <Link to="/" className="text-dark">
            {lang.dogsChallenge}
          </Link>
        </div>
        <div className="sidebar-heading">
          <div className="row">
            <input
              className="form-control col-12"
              type="search"
              placeholder={`${lang.search}..`}
              aria-label={`${lang.search}..`}
              onChange={props.handleChange}
              value={props.inputSearch}
            />
          </div>
        </div>
        <div className="list-group list-group-flush">
          {props.breeds.map((breed: IBreed, index: number) => {
            if (breed.has_sub_breeds) {
              return (
                <Fragment key={index}>
                  <a
                    href={`#${breed.name}Submenu`}
                    data-toggle="collapse"
                    aria-expanded="false"
                    className="dropdown-toggle list-group-item list-group-item-action bg-light"
                  >
                    {breed.name}
                  </a>
                  <SubBreedsList
                    className="collapse"
                    id={`${breed.name}Submenu`}
                  >
                    {breed.sub_breeds.map((sub_breed: string, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          className="list-group-item list-group-item-action bg-light"
                          to={`/breed/${breed.name}-${sub_breed}`}
                        >
                          {sub_breed}
                        </Link>
                      </li>
                    ))}
                  </SubBreedsList>
                </Fragment>
              );
            } else {
              return (
                <Link
                  key={index}
                  to={`/breed/${breed.name}`}
                  className="list-group-item list-group-item-action bg-light"
                >
                  {breed.name}
                </Link>
              );
            }
          })}
        </div>
      </SidebarWrapper>
    </Fragment>
  );
};
