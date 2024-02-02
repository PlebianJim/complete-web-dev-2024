//Get the element
const hoverText = document.getElementById('hover-text');
//Define a function to handle the hover effect
function handleHover(element, newText, newColor) {
    //Change the text on hover
    element.addEventListener('mouseover', () => {
        element.textContent = newText;
        element.style.color = 'red';
    });
    //Revert the text on mouseout
    element.addEventListener('mouseout', () => {
        element.textContent = "Hover here for solution";
        element.style.color = 'black';
    });
}

//Call the function and pass the element and the new text
handleHover(hoverText, 'Update the <ol> attribute to include "start=x"');