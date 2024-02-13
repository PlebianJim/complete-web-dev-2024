//Search document and grab the input elements with the labelled ID's
const blockHeightSlider = document.getElementById("block-height-slider");
const blockWidthSlider = document.getElementById("block-width-slider");

const inlineHeightSlider = document.getElementById("inline-height-slider");
const inlineWidthSlider = document.getElementById("inline-width-slider");

const inlineBlockHeightSlider = document.getElementById(
  "inline-block-height-slider"
);
const inlineBlockWidthSlider = document.getElementById(
  "inline-block-width-slider"
);

//Search document and grab the output elements with the labelled ID's
const blockHeightOutput = document.getElementById("block-height-output");
const blockWidthOutput = document.getElementById("block-width-output");

const inlineHeightOutput = document.getElementById("inline-height-output");
const inlineWidthOutput = document.getElementById("inline-width-output");

const inlineBlockHeightOutput = document.getElementById(
  "inline-block-height-output"
);
const inlineBlockWidthOutput = document.getElementById(
  "inline-block-width-output"
);

//Search the document, grab the related classes and attach them to these variables
const blockElement = document.querySelector(".block");
const inlineElement = document.querySelector(".inline");
const inlineBlockElement = document.querySelector(".inline-block");

//Add event listeners to each of the sliders that update the DOM to reflect the user choice from the inputs and the size and position on the example elements

//Block Height event listener
blockHeightSlider.addEventListener("input", () => {
  const heightValue = blockHeightSlider.value + "px";
  blockElement.style.height = heightValue;
  blockHeightOutput.textContent = blockHeightSlider.value;
});

//Block Width event listener
blockWidthSlider.addEventListener("input", () => {
  const widthValue = blockWidthSlider.value + "px";
  blockElement.style.width = widthValue;
  blockWidthOutput.textContent = blockWidthSlider.value;
});

//Inline Height event listener
inlineHeightSlider.addEventListener("input", () => {
  const heightValue = inlineHeightSlider.value + "px";
  inlineElement.style.height = heightValue;
  inlineHeightOutput.textContent = inlineHeightSlider.value;
});

//Inline Width event listener
inlineBlockHeightSlider.addEventListener("input", () => {
  const heightValue = inlineBlockHeightSlider.value + "px";
  inlineBlockElement.style.height = heightValue;
  inlineBlockHeightOutput.textContent = inlineBlockHeightSlider.value;
});

//Inline-Block Height event listener
inlineBlockWidthSlider.addEventListener("input", () => {
  const widthValue = inlineBlockWidthSlider.value + "px";
  inlineBlockElement.style.width = widthValue;
  inlineBlockWidthOutput.textContent = inlineBlockWidthSlider.value;
});
