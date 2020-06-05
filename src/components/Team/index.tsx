import React from "react";
import { connect } from "react-redux";

// actions
import { removeFromTeam } from "../../redux/actions/team.actions";

// types
import { RootState } from "../../types/store";
import { IDogTeam } from "../../types/team";

// components
import TeamContent from "./Team.content";

interface Props {
  dogs: IDogTeam[];
  removeFromTeam: (breed: string, image: string) => void;
}

const Team = (props: Props) => {
  const emptyTeam = Boolean(props.dogs.length === 0);
  return (
    <TeamContent
      emptyTeam={emptyTeam}
      removeFromTeam={props.removeFromTeam}
      dogs={props.dogs}
    />
  );
};

const mapStateToProps = function (state: RootState, ownProps: any) {
  return {
    dogs: state.team.dogs,
  };
};

const mapDispatchToProps = function (dispatch: any) {
  return {
    removeFromTeam: (breed: string, image: string) =>
      dispatch(removeFromTeam(breed, image)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
