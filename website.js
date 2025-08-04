// Change background color on button click
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Example: Alert on page load
window.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');
});