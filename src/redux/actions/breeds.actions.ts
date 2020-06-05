import axios from "axios";
import { Dispatch } from "redux";
import { API } from "../../config/constants";

import {
  GET_BREEDS_ATTEMPT,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_FAILURE,
  GET_BREEDS_IMAGES_ATTEMPT,
  GET_BREEDS_IMAGES_SUCCESS,
  GET_BREEDS_IMAGES_FAILURE,
} from "../constants";

// getBreeds actions
const getBreedsAttempt = () => ({
  type: GET_BREEDS_ATTEMPT,
});

const getBreedsSuccess = (payload: any) => ({
  type: GET_BREEDS_SUCCESS,
  payload,
});

const getBreedsFailure = (error: string) => ({
  type: GET_BREEDS_FAILURE,
  payload: {
    error,
  },
});

// getBreedsImages actions
const getBreedsImagesAttempt = () => ({
  type: GET_BREEDS_IMAGES_ATTEMPT,
});

const getBreedsImagesSuccess = (payload: any) => ({
  type: GET_BREEDS_IMAGES_SUCCESS,
  payload,
});

const getBreedsImagesFailure = (error: string) => ({
  type: GET_BREEDS_IMAGES_FAILURE,
  payload: {
    error,
  },
});

export const getBreeds = () => (dispatch: Dispatch) => {
  dispatch(getBreedsAttempt());
  return axios
    .get(`https://dog.ceo/api/breeds/list/all`)
    .then((res) => res.data)
    .then((payload) => {
      dispatch(getBreedsSuccess(payload));
    })
    .catch((error) => {
      dispatch(getBreedsFailure("error"));
    });
};

export const getBreedsImages = (breedsToGet: string[]) => (
  dispatch: Dispatch
) => {
  const breedsUrls = breedsToGet.map((breedName: string) => {
    const breedNameUrl = breedName.trim().replace("-", "/");
    return `https://dog.ceo/api/breed/${breedNameUrl}/images/random`;
  });

  const axiosRequests = breedsUrls.map((breed_url: string) =>
    axios.get(breed_url)
  );

  dispatch(getBreedsImagesAttempt());

  return axios
    .all(axiosRequests)
    .then(
      axios.spread((...responses) => {
        const responsesData = responses.map(
          (response: any) => response.data.message
        );

        const breedsAndSubBreedsWithImage = responsesData.map(
          (imageUrl: string, index: number) => {
            return {
              name: breedsToGet[index],
              image: imageUrl,
            };
          }
        );
        dispatch(getBreedsImagesSuccess(breedsAndSubBreedsWithImage));
      })
    )
    .catch((errors) => {
      dispatch(getBreedsImagesFailure("error"));
    });
};
