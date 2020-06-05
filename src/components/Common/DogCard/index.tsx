import React from "react";

interface Props {
  dogUrl: string;
  breed: string;
  showBreed: boolean;
  button: (breed: string, image: string) => any;
}

export default (props: Props) => (
  <div>
    <img className="card-img-top" src={props.dogUrl} alt="" height="350px" />
    <div className="card-body">
      <div className="text-center">
        {props.showBreed && (
          <h4 className="card-text text-center text-dark">{props.breed}</h4>
        )}
        {props.button(props.breed, props.dogUrl)}
      </div>
    </div>
  </div>
);
