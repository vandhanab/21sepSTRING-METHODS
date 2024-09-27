// Step 1: Define two strings
let stra = "JavaScript";
let strb = "Programming";

// Step 2: Extract the first 3 characters of the first string
let firstThreeChars = stra.slice(0, 3); // "Jav"

// Step 3: Extract the last 3 characters of the second string
let lastThreeChars = strb.slice(-3); // "ing"

// Step 4: Concatenate the two results
let combinedStrings = firstThreeChars.concat(lastThreeChars); // "Javing"

// Step 5: Convert the combined string to uppercase
let results = combinedStrings.toUpperCase(); // "JAVING"

// Output the final result
console.log("first 3 characters of 1st string:",stra);
console.log("last 3 characters of 2st string:",strb);
console.log("combined both extracted string:",combinedStrings)
console.log("Final Result:", results);  // Output: "JAVING"