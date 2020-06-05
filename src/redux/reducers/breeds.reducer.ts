import {
  GET_BREEDS_ATTEMPT,
  GET_BREEDS_SUCCESS,
  GET_BREEDS_FAILURE,
  GET_BREEDS_IMAGES_ATTEMPT,
  GET_BREEDS_IMAGES_SUCCESS,
  GET_BREEDS_IMAGES_FAILURE,
} from "../constants";

import { IBreedsInitialState, IBreed } from "../../types/breeds";

const initialState: IBreedsInitialState = {
  fetchingBreedsList: 0,
  fetchingBreedsImages: 0,
  errorMessage: "",
  success: true,
  breedsList: [],
  breedsWithSubBreedsList: [],
  breedsImages: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    // getBreeds
    case GET_BREEDS_ATTEMPT:
      return {
        ...state,
        fetchingBreedsList: state.fetchingBreedsList + 1,
        success: true,
        errorMessage: "",
      };
    case GET_BREEDS_SUCCESS:
      return {
        ...state,
        fetchingBreedsList: state.fetchingBreedsList - 1,
        success: true,
        errorMessage: "",
        breedsList: parseBreedsList(action.payload.message),
        breedsWithSubBreedsList: parseBreedsWithSubBreedsList(
          action.payload.message
        ),
      };
    case GET_BREEDS_FAILURE:
      return {
        ...state,
        fetchingBreedsList: state.fetchingBreedsList - 1,
        success: false,
        errorMessage: action.payload.error,
      };

    // getBreedsImages
    case GET_BREEDS_IMAGES_ATTEMPT:
      return {
        ...state,
        fetchingBreedsImages: state.fetchingBreedsImages + 1,
        success: true,
        errorMessage: "",
      };
    case GET_BREEDS_IMAGES_SUCCESS:
      return {
        ...state,
        fetchingBreedsImages: state.fetchingBreedsImages - 1,
        success: true,
        errorMessage: "",
        breedsImages: action.payload,
      };
    case GET_BREEDS_IMAGES_FAILURE:
      return {
        ...state,
        fetchingBreedsImages: state.fetchingBreedsImages - 1,
        success: false,
        errorMessage: action.payload.error,
      };

    default:
      return state;
  }
};

function parseBreedsList(breedsList: any): IBreed[] {
  const allBreeds = [];
  for (const prop in breedsList) {
    const breed: IBreed = {
      name: "",
      has_sub_breeds: false,
      sub_breeds: [],
    };
    breed.name = prop;
    if (breedsList[prop].length > 0) {
      breed.has_sub_breeds = true;
      breed.sub_breeds = breedsList[prop];
    }
    allBreeds.push(breed);
  }
  return allBreeds;
}

function parseBreedsWithSubBreedsList(breedsList: any): string[] {
  const allBreeds = [];
  for (const prop in breedsList) {
    const breedHasSubBreeds = Boolean(breedsList[prop].length > 0);
    if (breedHasSubBreeds) {
      breedsList[prop].forEach((element: string) => {
        const completeBreedName = `${prop}-${element}`;
        allBreeds.push(completeBreedName);
      });
    } else {
      allBreeds.push(prop);
    }
  }
  return allBreeds;
}
