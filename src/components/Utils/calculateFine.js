export const calculateFine = (returnDate, todaysDate) => {
  const shouldBeGivenBack = returnDate > todaysDate ? false : true;
  if (shouldBeGivenBack) {
    const diffTime = Math.abs(returnDate - todaysDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays - 1;
  } else return 0;
};
