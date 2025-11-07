// Task 1: Format Full Name
function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }
  const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  return `${formattedLastName}, ${formattedFirstName}`;
}

console.log(formatFullName("kaniya", "martin"));

// Task 2: Calculate Total Cost
function calculateTotalCost(price, quantity) {
  const taxRate = 0.07;
  const subtotal = price * quantity;
  const total = subtotal + subtotal * taxRate;
  return total.toFixed(2);
}

console.log("The total cost is $" + calculateTotalCost(30, 2));

// Task 3: Check Eligibility
function checkEligibility(age, hasPermission) {
  if (typeof age !== "number" || age < 0) {
    return "Invalid age input.";
  }

  if (age >= 18 && hasPermission) {
    return "Eligible.";
  } else if (age >= 16 && !hasPermission) {
    return "Conditionally eligible.";
  } else {
    return "Not eligible.";
  }
}

console.log(checkEligibility(18, true));
console.log(checkEligibility(16, false));
console.log(checkEligibility(12, true));
console.log(checkEligibility(-1, false));

// Task 4: Refactoring for Reusability
function calculateTotalCostWithDiscount(price, quantity, discount = 0) {
  const taxRate = 0.07;
  let subtotal = price * quantity;

  if (discount > 0) {
    subtotal -= discount;
  }

  const total = subtotal + subtotal * taxRate;
  return total.toFixed(2);
}

console.log("Total with discount: $" + calculateTotalCostWithDiscount(50, 3, 10));
console.log("Total without discount: $" + calculateTotalCostWithDiscount(50, 3));
