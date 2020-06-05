import React from "react";

interface Props {
  text: string;
}

export default (props: Props) => (
  <div className="alert alert-danger mt-3" role="alert">
    {props.text}
  </div>
);
