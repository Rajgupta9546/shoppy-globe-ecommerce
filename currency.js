export const convertToRupees = (priceInDollar) => {
  const rate = 83; // 1$ = 83₹ (approx)
  return Math.round(priceInDollar * rate);
};