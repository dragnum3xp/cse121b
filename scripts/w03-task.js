/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (num1, num2){

    return num1 + num2;
}

function addNumbers (){

    let addNumber1 = Number(document.querySelector("#add1").value);

    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

const substract = function (num1, num2){

    return num1 - num2;
}

const subtractNumbers = function (){

    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = substract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

const multiplayNumbers = () => {

    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplayNumbers);



/* Open Function Use - Divide Numbers */

const divide = (num1, num2) => num1 / num2;

const divideNumbers = () => {

    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */


const subtotal = () => {

    let userInput = Number(document.querySelector("#subtotal").value);

    let membership = document.querySelector("#member");

    if (membership.checked) {
        userInput = userInput - (userInput * 0.20);
    }
    document.querySelector("#total").textContent =`${userInput}`;
}

document.querySelector("#getTotal").addEventListener("click", subtotal);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

const input = document.querySelector("#array")

input.textContent = numbersArray.join(', ')

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.
filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number)=> sum + number)

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);