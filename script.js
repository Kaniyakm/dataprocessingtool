function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  const formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return `${formattedLast}, ${formattedFirst}`;
}

console.log(formatFullName("Kaniya", "Martin"));


function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number" ||
    isNaN(price) ||
    isNaN(quantity) ||
    isNaN(taxRate)
  ) {
    return "Invalid input.";
  }

  const totalCost = (price * quantity) * (1 + taxRate);
  return `The total cost is $${totalCost.toFixed(2)}`;
}

console.log(calculateTotalCost(20, 3, 0.07));


function checkEligibility(age, isEmployed) {
  if (typeof age !== "number" || age < 0 || isNaN(age)) {
    return "Invalid age input.";
  }

  if (age <= 18) {
    return "Not eligible.";
  } else if (age > 18 && isEmployed === true) {
    return "Eligible.";
  } else if (age > 18 && isEmployed === false) {
    return "Conditionally eligible.";
  }

  return "Eligibility cannot be determined.";
}

console.log(checkEligibility(25, true));
console.log(checkEligibility(25, false));
console.log(checkEligibility(17, true));
console.log(checkEligibility("twenty", true));
