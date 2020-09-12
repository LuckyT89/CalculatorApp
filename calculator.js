var calc = document.getElementById('mainBox');
var display = document.getElementById('display');

var string1 = '';
var string2 = '';
var result = 0;

var divideOn = false;
var multiplyOn = false;
var subtractOn = false;
var addOn = false;

var firstNumber = true;

display.textContent = result;


function buttonPress(e) {
    var target = e.target;

    // When any button is pressed, it should deselect any of the orange operator buttons 
    // if they are currently selected
    var deselect = document.getElementsByClassName('selected');
    if (deselect[0]){
        deselect[0].classList.remove('selected');
    }

    // User clicks on an orange button
    if (target.classList.contains('orange')) {
       
        // User clicks on divide button
        if (target.id === 'divide') {
            target.classList.add('selected');
            firstNumber = false;

            divideOn = true;
            multiplyOn = false;
            subtractOn = false;
            addOn = false;

            return false;
        }

        // User clicks on multiply button
        if (target.id === 'multiply') {
            target.classList.add('selected');
            firstNumber = false;

            divideOn = false;
            multiplyOn = true;
            subtractOn = false;
            addOn = false;

            return false;
        }

        // User clicks on subtract button
        if (target.id === 'subtract') {
            target.classList.add('selected');
            firstNumber = false;

            divideOn = false;
            multiplyOn = false;
            subtractOn = true;
            addOn = false;

            return false;
        }

        // User clicks on add button
        if (target.id === 'add') {
            target.classList.add('selected');
            firstNumber = false;

            divideOn = false;
            multiplyOn = false;
            subtractOn = false;
            addOn = true;

            return false;
        }


        // User clicks on equal button
        if (target.id === 'equal') {

            // After hitting the equal button, if the user starts entering more numbers, it 
            // should start registering as string1. 
            firstNumber = true;

            var num1 = Number(string1);
            var num2 = Number(string2);

            // If divide button was used in the equation
            if (divideOn) {
                display.textContent = num1 / num2;

                divideOn = false;
                string1 = '';
                string2 = '';

                return false;
            }

            // If multiply button was used in the equation
            if (multiplyOn) {
                display.textContent = num1 * num2;

                multiplyOn = false;
                string1 = '';
                string2 = '';

                return false;
            }

            // If subtract button was used in the equation
            if (subtractOn) {
                display.textContent = num1 - num2;

                subtractOn = false;
                string1 = '';
                string2 = '';

                return false;
            }

            // If add button was used in the equation
            if (addOn) {
                display.textContent = num1 + num2;

                addOn = false;
                string1 = '';
                string2 = '';

                return false;
            }

            display.textContent = 'equal!';
            return false;
        }
    }

    // Displays the first numbers being entered
    if (firstNumber) {
        string1 = string1 + target.textContent;
        display.textContent = string1;
        return false;
    }

    // Displays the second numbers being entered
    if (!firstNumber) {
        string2 = string2 + target.textContent;
        display.textContent = string2;
        return false;
    }


    display.textContent = 'wat doin?'
}



calc.addEventListener('click', buttonPress);