/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Filipe Souza"; 
const Year = new Date();
let currentYear = Year.getFullYear();
let profilePicture = ("images/profimg.png")


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img")


/* Step 4 - Adding Content */

imageElement.setAttribute("src", `${profilePicture}`);
nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.innerHTML = (`${currentYear}`);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */

let foods = ["hamburguer", "Soap", "pizza", "potatoes", "fried chicken"];

foodElement.innerHTML += `<br>${foods}`;
foods.shift()
foodElement.innerHTML += `<br>${foods}`;
foods.pop()
foodElement.innerHTML += `<br>${foods}`;






