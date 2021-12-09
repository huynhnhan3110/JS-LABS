function getTicketPrice(age) {
  let price;
  if (age < 0 || age > 125) {
    price = -1;
  } else if (age < 6 || age >= 70) {
    price = 0;
  } else if (age <= 12) {
    price = 20000;
  } else {
    price = 50000;
  }

  return price;
}
console.log(getTicketPrice(12));

// v2 if return
function getTicketPrice(age) {
  if (age < 1 || age > 125) {
    return -1;
  }
  if (age < 6 || age >= 70) {
    return 0;
  }
  if (age <= 12) {
    return 20000;
  }
  return 50000;
}
console.log(getTicketPrice(69));
