// constants for query selector
const studentIdPara = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageElement = document.getElementById("images");

const imageArray = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
];

// function to change bg color from user input and add student id
function changeCustomColor() {
const userInput = parseInt(customNumberInput.value);
studentIdPara.textContent = "200567668"; 
if (userInput < 0 || userInput > 100) {
    document.body.style.backgroundColor = "red";
} else if (userInput >= 0 && userInput <= 20) {
    document.body.style.backgroundColor = "green";
} else if (userInput > 20 && userInput <= 40) {
    document.body.style.backgroundColor = "blue";
} else if (userInput > 40 && userInput <= 60) {
    document.body.style.backgroundColor = "orange";
} else if (userInput > 60 && userInput <= 80) {
    document.body.style.backgroundColor = "purple";
} else if (userInput > 80 && userInput <= 100) {
    document.body.style.backgroundColor = "yellow";
}
}

// function to change bg color from random no.
function changeRandomColor() {
const randomNumber = Math.floor(Math.random() * 100) + 1;
customNumberInput.value = randomNumber;
changeCustomColor();
}

// function to generate options for select list
function addList() {
    while (imageSelect.options.length > 1) {
        imageSelect.remove(1);
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}
imageArray.forEach((imagePath, index) => {
    const option = document.createElement("option");
    option.value = imagePath;
    option.textContent = `Image ${index + 1}`;
    imageSelect.appendChild(option);
});
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    imageElement.src = selectedImage;
    imageElement.alt = `Selected Image: ${selectedImage}`;
}

// event listeners for on click event of buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);
// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);
addList();