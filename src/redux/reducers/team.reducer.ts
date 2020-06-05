import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from "../constants";
import { ITeamInitialState, IDogTeam } from "../../types/team";

import { getLocalValue, setLocalValue } from "./../../utils/localStorage";
import orderDogsByBreed from "./../../utils/orderDogsByBreed";

const localTeam = getLocalValue("team");
const dogsTeam = localTeam || [];
const breedsOfTeam = addBreedToTeam(dogsTeam);

const initialState: ITeamInitialState = {
  dogs: dogsTeam,
  breeds: breedsOfTeam, // {["breed-name"]: X}
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_TEAM:
      return {
        ...state,
        dogs: addDogToTeam(state.dogs, action.payload),
        breeds: addBreedToTeam([...state.dogs, action.payload]),
      };
    case REMOVE_FROM_TEAM:
      return {
        ...state,
        dogs: removeDogFromTeam(state.dogs, action.payload),
        breeds: removeBreedFromTeam(state.breeds, action.payload),
      };
    default:
      return state;
  }
};

function addDogToTeam(dogs: IDogTeam[], newDog: IDogTeam) {
  const team = [...dogs, newDog];
  setLocalValue("team", orderDogsByBreed(team));
  return team;
}

function removeDogFromTeam(dogs: IDogTeam[], dog_to_remove: IDogTeam) {
  const team = [...dogs];
  const removeIndex = team
    .map(function (dog) {
      return dog.image;
    })
    .indexOf(dog_to_remove.image);

  team.splice(removeIndex, 1);
  setLocalValue("team", orderDogsByBreed(team));
  return team;
}

function addBreedToTeam(dogs: IDogTeam[]) {
  const initialValue = {};
  return dogs.reduce((obj: any, dog: IDogTeam) => {
    return {
      ...obj,
      [dog.breed]: obj[dog.breed] ? obj[dog.breed] + 1 : 1,
    };
  }, initialValue);
}

function removeBreedFromTeam(breeds: any, dog_to_remove: IDogTeam) {
  const teamBreeds = {
    ...breeds,
    [dog_to_remove.breed]: breeds[dog_to_remove.breed] - 1,
  };

  return teamBreeds;
}
