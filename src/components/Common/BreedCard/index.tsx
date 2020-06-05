import React from "react";
import { Link } from "react-router-dom";

interface Props {
  breed: string;
  image: string;
  linkTo: string;
}

export default (props: Props) => (
  <div>
    <Link to={`/breed/${props.linkTo}`}>
      <img className="card-img-top" src={props.image} alt="" height="350px" />
    </Link>
    <div className="card-body">
      <Link to={`/breed/${props.linkTo}`}>
        <h4 className="card-text text-center text-dark">{props.breed}</h4>
      </Link>
    </div>
  </div>
);
