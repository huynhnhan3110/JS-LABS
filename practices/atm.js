// PLEASE USE ALL OF THESE CONSTANTS IN YOUR CODE
// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

export function withdraw(amount) {
  if (amount % BASE_UNIT !== 0 || typeof amount !== 'number') return 'Invalid balance';
  if (amount > 8000000) return 'Insufficient balance from ATM';
  let statisticMoney = {};

  statisticMoney['k500'] = Math.trunc(amount / K500_VALUE);
  if (statisticMoney['k500'] > K500_QUANTITY) statisticMoney['k500'] = K500_QUANTITY;
  amount = amount - statisticMoney['k500'] * K500_VALUE;

  statisticMoney['k200'] = Math.trunc(amount / K200_VALUE);
  if (statisticMoney['k200'] > K200_QUANTITY) statisticMoney['k200'] = K200_QUANTITY;

  amount = amount - statisticMoney['k200'] * K200_VALUE;
  statisticMoney['k100'] = Math.trunc(amount / K100_VALUE);
  if (statisticMoney['k100'] > K100_QUANTITY) statisticMoney['k100'] = K100_QUANTITY;

  amount = amount - statisticMoney['k100'] * K100_VALUE;

  statisticMoney['k50'] = Math.trunc(amount / K50_VALUE);
  if (statisticMoney['k50'] > K50_QUANTITY) statisticMoney['k50'] = K50_QUANTITY;

  amount = amount - statisticMoney['k50'] * K50_VALUE;

  return statisticMoney;
}
