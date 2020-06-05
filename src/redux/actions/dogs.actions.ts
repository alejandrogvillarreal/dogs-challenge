import axios from "axios";
import { Dispatch } from "redux";
import {
  GET_DOGS_ATTEMPT,
  GET_DOGS_SUCCESS,
  GET_DOGS_FAILURE,
} from "../constants";

// getDogs actions
const getDogsAttempt = () => ({
  type: GET_DOGS_ATTEMPT,
});

const getDogsSuccess = (payload: any) => ({
  type: GET_DOGS_SUCCESS,
  payload,
});

const getDogsFailure = (error: string) => ({
  type: GET_DOGS_FAILURE,
  payload: {
    error,
  },
});

export const getDogs = (breedName: string) => (dispatch: Dispatch) => {
  dispatch(getDogsAttempt());
  const breedNameUrl = breedName.trim().replace(" ", "/");
  return axios
    .get(`https://dog.ceo/api/breed/${breedNameUrl}/images`)
    .then((res) => res.data)
    .then((payload) => {
      dispatch(getDogsSuccess(payload));
    })
    .catch((error) => {
      dispatch(getDogsFailure("error"));
    });
};
