import React, { useContext } from "react";
import { languageContext } from "../../config/language";
import { Link } from "react-router-dom";

interface Props {
  handleClickSidebar: () => void;
}

export default (props: Props) => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
      <button
        className="btn btn-info"
        id="menu-toggle"
        onClick={props.handleClickSidebar}
      >
        {lang.breedsList}
      </button>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link btn btn-info text-white" to="/team">
              {lang.myTeam}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
