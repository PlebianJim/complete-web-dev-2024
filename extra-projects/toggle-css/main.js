// Create and initialize a counter variable that is set to 0
let counter = 1;

// Define a function to toggle the CSS stylesheet
function addCSS() {
  // Increment the counter variable
  counter++;

  // Check if the counter is odd (not divisible by 2)
  if (counter % 2 !== 0) {
    // Update the DOM by locating the element with the "head" ID and then adding the style sheet
    document.getElementById("head").innerHTML =
      ' <title>Extra Project - Toggle CSS</title> \n<link rel="stylesheet" href="./styles.css">';
  }
  // Check if the counter is even (divisible by 2)
  else {
    // Update the DOM by locating the element with the "head" ID and then removing the style sheet
    document.getElementById("head").innerHTML =
      " <title>Extra Project - Toggle CSS</title>";
  }
}
