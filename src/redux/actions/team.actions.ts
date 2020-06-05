import { Dispatch } from "redux";
import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from "../constants";

// actions
const addToTeamAction = (payload: any) => ({
  type: ADD_TO_TEAM,
  payload,
});

const removeFromTeamAction = (payload: any) => ({
  type: REMOVE_FROM_TEAM,
  payload,
});

export const addToTeam = (breed: string, image: string) => (
  dispatch: Dispatch
) => {
  const breedName = breed.trim().replace(" ", "-");
  const dog = {
    breed: breedName,
    image,
  };
  dispatch(addToTeamAction(dog));
};

export const removeFromTeam = (breed: string, image: string) => (
  dispatch: Dispatch
) => {
  const breedName = breed.trim().replace(" ", "-");
  const dog = {
    breed: breedName,
    image,
  };
  dispatch(removeFromTeamAction(dog));
};
