function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  const formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return `${formattedLast}, ${formattedFirst}`;
}

console.log(formatFullName("kaniya", "martin"));
