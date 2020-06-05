export interface IBreedsInitialState {
  fetchingBreedsList: number;
  fetchingBreedsImages: number;
  errorMessage: string;
  success: boolean;
  breedsList: IBreed[];
  breedsWithSubBreedsList: string[];
  breedsImages: IBreedImage[];
}

export interface IBreed {
  name: string;
  has_sub_breeds: boolean;
  sub_breeds: string[];
}

export interface IBreedImage {
  name: string;
  image: string;
}
