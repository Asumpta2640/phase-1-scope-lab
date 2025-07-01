// 1. Declare a variable in global scope called customerName using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to declare a global variable from inside the function
function setBestCustomer() {
  // Not using var/let/const means this becomes a global variable
  bestCustomer = 'not bob';
}

// 4. Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// 6. Attempt to change the constant (will throw an error)
function changeLeastFavoriteCustomer() {
  // This line will throw an error: Assignment to constant variable.
  leastFavoriteCustomer = 'someone else';
}

