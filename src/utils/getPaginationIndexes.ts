export default (pageNumber: number) => {
  let indexFrom: number, indexTo: number;
  if (pageNumber === 1) {
    indexFrom = 0;
    indexTo = 10;
  } else {
    indexFrom = pageNumber * 10 - 10;
    indexTo = indexFrom + 10;
  }

  return {
    indexFrom,
    indexTo,
  };
};
