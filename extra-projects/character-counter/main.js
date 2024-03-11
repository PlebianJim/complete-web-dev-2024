document.addEventListener('DOMContentLoaded', function () {
    // Get the textarea element and the span for character count
    const textarea = document.getElementById('textarea');
    const charCountSpan = document.getElementById('characters-typed');

    // Add an input event listener to the textarea
    textarea.addEventListener('input', function () {
        // Update the character count span with the length of the textarea value
        charCountSpan.textContent = textarea.value.length;
    });
});