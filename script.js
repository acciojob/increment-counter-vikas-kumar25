//your JS code here. If required.
// 1. Select the elements
const counterParagraph = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");

// 2. Add a click event listener to the button
incrementButton.addEventListener("click", function () {
  // Get the current (un-incremented) value from the paragraph text
  const currentValue = counterParagraph.textContent;

  // Display the alert with the un-incremented value
  alert(currentValue);

  // Increment the value and update the paragraph
  counterParagraph.textContent = Number(currentValue) + 1;
});