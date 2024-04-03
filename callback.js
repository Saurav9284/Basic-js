// Function to calculate the square of a number asynchronously
function calculateSquare(number, callback) {
    setTimeout(function() {
        const square = number * number;
        callback(square); // Call the callback function with the square
    }, 1000); // Simulating a delay of 1 second
}

// Callback function to handle the result
function handleResult(result) {
    console.log("The square is: " + result);
}

// Call the calculateSquare function with a number and pass the handleResult function as a callback
calculateSquare(5, handleResult);
