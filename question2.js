const balance = (
  openingSum,
  interestRate,
  taxFreeLimit,
  taxRate,
  numMonths
) => {
  let balance = openingSum;
  while (numMonths--) {
    let interest = (interestRate / 100) * balance;
    let tax =
      balance > taxFreeLimit ? (taxRate / 100) * (balance - taxFreeLimit) : 0;
    balance = balance + interest - tax;
  }
  return balance;
};

console.log(balance(10000, 1, 20000, 1, 2)); // 10201
console.log(balance(25000, 2, 20000, 1, 2)); // 25904.5
console.log(balance(19800, 2, 20000, 1, 2)); // 20597.96
