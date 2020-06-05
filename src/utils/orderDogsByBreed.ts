import { IDogTeam } from "../types/team";

export default (dogs: IDogTeam[]) => {
  function compare(dog1: IDogTeam, dog2: IDogTeam) {
    const dogA = dog1.breed.toUpperCase();
    const dogB = dog2.breed.toUpperCase();

    let comparison = 0;
    if (dogA > dogB) {
      comparison = 1;
    } else if (dogA < dogB) {
      comparison = -1;
    }
    return comparison;
  }

  return dogs.sort(compare);
};
