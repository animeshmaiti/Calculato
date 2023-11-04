let buttonInput = document.querySelectorAll(".button"); // all the buttons
let input = document.getElementById("input"); // the input screen
let equal = document.getElementById("equal");// = operator
let clear = document.getElementById("clear");
let erase = document.getElementById("del");

window.onload = () => {
    input.value = "";
}

// displaying the input value on the screen for each button pressed
buttonInput.forEach((buttonClass) => {
    buttonClass.addEventListener("click", () => {
        input.value += buttonClass.value;
    });
});

// displaying the result of the mathematical expression
equal.addEventListener("click", () => {
    let inputValue = input.value;
    console.log(inputValue);
    try {
        let sol = eval(inputValue);
        input.value = sol;
    } catch (error) {
        alert(error.message);
    }
})

// clearing the screen
clear.addEventListener("click", () => {
    input.value = "";
});

// erasing the last character
del.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});