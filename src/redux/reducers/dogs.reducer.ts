import {
  GET_DOGS_ATTEMPT,
  GET_DOGS_SUCCESS,
  GET_DOGS_FAILURE,
} from "../constants";

import { IDogsInitialState } from "../../types/dogs";

const initialState: IDogsInitialState = {
  fetchingDogs: 0,
  errorMessage: "",
  success: true,
  dogs: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    // getDogs
    case GET_DOGS_ATTEMPT:
      return {
        ...state,
        fetchingDogs: state.fetchingDogs + 1,
        success: true,
        errorMessage: "",
      };
    case GET_DOGS_SUCCESS:
      return {
        ...state,
        fetchingDogs: state.fetchingDogs - 1,
        success: true,
        errorMessage: "",
        dogs: action.payload.message,
      };
    case GET_DOGS_FAILURE:
      return {
        ...state,
        fetchingDogs: state.fetchingDogs - 1,
        success: false,
        errorMessage: action.payload.error,
      };

    default:
      return state;
  }
};
