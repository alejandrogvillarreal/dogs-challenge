import React from "react";

interface Props {
  text: string;
}

export default (props: Props) => (
  <div className="alert alert-success mt-3" role="alert">
    {props.text}
  </div>
);
