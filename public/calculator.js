var calc = document.getElementById('mainBox');
var display = document.getElementById('display');

var string1 = '';
var string2 = '';
var result = 0;
var digitCount = 0;

// When the equal button is pressed, it needs to know which operator sign was used in the equation
var divideOn = false;
var multiplyOn = false;
var subtractOn = false;
var addOn = false;

// Tracks if the user is inputing the first number in an equation or the second number
var firstNumber = true;

// Tracks if each number in an equation has had a decimal place set
var firstDecimalSet = false;
var secondDecimalSet = false;

// Counts the number if integers in the first and second number of an equation. 
// No number should be more than 10 integers long. 
var firstIntegerCount = 0;
var secondIntegerCount = 0;


display.textContent = result;




// START EVENT LISTENER FOR ANY CLICK INSIDE THE MAIN BOX
function buttonPress(e) {
    var target = e.target;

    // This is to prevent random things from appearing in the display if the user 
    // clicks outside of one of the buttons. 
    if ((target.id === 'mainBox') || (target.id === 'display')) {
        return false;
    }

    // When any button is pressed, it should deselect any of the orange operator buttons 
    // if they are currently selected
    var deselect = document.getElementsByClassName('selected');
    if (deselect[0]){
        deselect[0].classList.remove('selected');
    }

    // ***** START User clicks on orange button *****
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


        // ***** START User clicks on equal button *****
        if (target.id === 'equal') {

            // After hitting the equal button, if the user starts entering more numbers, it 
            // should start registering as string1 and the user is now starting a new equation. 
            firstNumber = true;

            // After hitting the equal button, these should be set to false so that if the user 
            // starts entering another problem, it can contain decimals. 
            firstDecimalSet = false;
            secondDecimalSet = false;

            // The integer count variables are set back to 0 after hitting equals so that the user
            // can enter new numbers and have them be up to 9 digits longs. 
            firstIntegerCount = 0;
            secondIntegerCount = 0;

            // Numbers  the user enters are displayed as strings to make concatenation easier. 
            // Before we do the actual math operations, we need to convert them to numbers. 
            var num1 = Number(string1);
            var num2 = Number(string2);


            // *** START If divide button was used in the equation ***
            if (divideOn) {
                
                result = num1 / num2; // This is a number
                result = result.toString(); // This is back to a string for the number of digits check below

                // Count the number of digits in the result (do not count any decimal points as a digit)
                for (var i = 0; i < result.length; i++) {
                    digitCount++;
                    if (result.charAt[i] === '.') {
                        digitCount--;
                    }
                }

                // If the result is more than 9 digits, round the result to a precision of 9 digits.  
                if (digitCount > 9) {
                    result = (num1 / num2).toPrecision(9); // This is a number so we can use the toPrecision() method
                    result = result.toString(); // This is a string so we can use the addCommas() function in the next line
                    display.textContent = addCommas(result);
                    divideOn = false;
                    string1 = '';
                    string2 = '';
                    digitCount = 0;
                    result = 0;
                    window.alert('test');
                    return false;
                }

                // If the result is not more than 9 digits, display the result normally. 
                display.textContent = addCommas(result);
                divideOn = false;
                string1 = '';
                string2 = '';
                digitCount = 0;
                result = 0;
                return false;
            } // *** END If divide button was used in the equation ***



            // *** START If multiply button was used in the equation ***
            if (multiplyOn) {

                result = num1 * num2; // This is a number
                result = result.toString(); // This is back to a string for the number of digits check below

                // Count the number of digits in the result (do not count any decimal points as a digit)
                for (var i = 0; i < result.length; i++) {
                    digitCount++;
                    if (result.charAt[i] === '.') {
                        digitCount--;
                    }
                }

                // If the result is more than 9 digits, round the result to a precision of 9 digits.  
                if (digitCount > 9) {
                    result = (num1 * num2).toPrecision(9); // This is a number so we can use the toPrecision() method
                    result = result.toString(); // This is a string so we can use the addCommas() function in the next line
                    display.textContent = addCommas(result);
                    multiplyOn = false;
                    string1 = '';
                    string2 = '';
                    digitCount = 0;
                    result = 0;
                    return false;
                }

                // If the result is not more than 9 digits, display the result normally. 
                display.textContent = addCommas(result);
                multiplyOn = false;
                string1 = '';
                string2 = '';
                digitCount = 0;
                result = 0;
                return false;
            } // *** END If multiply button was used in the equation ***



            // *** START If subtract button was used in the equation ***
            if (subtractOn) {

                result = num1 - num2; // This is a number
                result = result.toString(); // This is back to a string for the number of digits check below

                // Count the number of digits in the result (do not count any decimal points as a digit)
                for (var i = 0; i < result.length; i++) {
                    digitCount++;
                    if (result.charAt[i] === '.') {
                        digitCount--;
                    }
                }

                // If the result is more than 9 digits, round the result to a precision of 9 digits.  
                if (digitCount > 9) {
                    result = (num1 - num2).toPrecision(9); // This is a number so we can use the toPrecision() method
                    result = result.toString(); // This is a string so we can use the addCommas() function in the next line
                    display.textContent = addCommas(result);
                    subtractOn = false;
                    string1 = '';
                    string2 = '';
                    digitCount = 0;
                    result = 0;
                    return false;
                }

                // If the result is not more than 9 digits, display the result normally. 
                display.textContent = addCommas(result);
                subtractOn = false;
                string1 = '';
                string2 = '';
                digitCount = 0;
                result = 0;
                return false;
            } // *** END If subtract button was used in the equation ***



            // *** START If add button was used in the equation ***
            if (addOn) {

                result = num1 + num2; // This is a number
                result = result.toString(); // This is back to a string for the number of digits check below

                // Count the number of digits in the result (do not count any decimal points as a digit)
                for (var i = 0; i < result.length; i++) {
                    digitCount++;
                    if (result.charAt[i] === '.') {
                        digitCount--;
                    }
                }

                // If the result is more than 9 digits, round the result to a precision of 9 digits.  
                if (digitCount > 9) {
                    result = (num1 + num2).toPrecision(9); // This is a number so we can use the toPrecision() method
                    result = result.toString(); // This is a string so we can use the addCommas() function in the next line
                    display.textContent = addCommas(result);
                    addOn = false;
                    string1 = '';
                    string2 = '';
                    digitCount = 0;
                    result = 0;
                    return false;
                }

                // If the result is not more than 9 digits, display the result normally. 
                display.textContent = addCommas(result);
                addOn = false;
                string1 = '';
                string2 = '';
                digitCount = 0;
                result = 0;
                return false;
            } // *** END If add button was used in the equation ***


            // Do nothing if the user hits equal before entering an equation or after a result 
            // has been given. 
            return false;
        } // ***** END User clicks on equal button *****

    } // ***** END User clicks on orange button *****




    // ***** START User clicks the Clear button. These settings are copied right from the variable settings 
    // at the top of the script from when they are first initialized. *****
    if (target.id === 'clear') {
        string1 = '';
        string2 = '';
        result = 0;

        divideOn = false;
        multiplyOn = false;
        subtractOn = false;
        addOn = false;

        firstNumber = true;

        firstDecimalSet = false;
        secondDecimalSet = false; 

        firstIntegerCount = 0;
        secondIntegerCount = 0;

        display.textContent = result;
        return false;
    } // ***** END User clicks the Clear button. *****




    // ***** START User clicks the decimal button *****
    if (target.id === 'decimal') {


    
        // If the user is entering the first number and a decimal has not been 
        // entered yet, add a decimal to the first number. The third check in this statement 
        // also prevents the user from adding a decimal if the number is already 9 digits and can't be any longer. 
        if (firstNumber && !firstDecimalSet && (string1.length < 9)) {

            // If the first button pressed is the decimal button, it should add a zero before it
            // so that it will display '0.' instead of just '.'
            if (string1 === '') {
                string1 = string1 + '0.';
                display.textContent = string1;
                firstDecimalSet = true;
                return false;
            }

            string1 = string1 + '.';
            display.textContent = addCommas(string1);
            firstDecimalSet = true;
            return false;
        }

        // If the user is entering the second number and a decimal had not been 
        // entered yet, add a decimal to the second number. The third check in this statement 
        // also prevents the user from adding a decimal if the number is already 9 digits and can't be any longer.
        if (!firstNumber && !secondDecimalSet && (string2.length < 9)) {

            // If the first button pressed is the decimal button, it should add a zero before it
            // so that it will display '0.' instead of just '.'
            if (string2 === '') {
                string2 = string2 + '0.';
                display.textContent = string2;
                secondDecimalSet = true;
                return false;
            }

            string2 = string2 + '.';
            display.textContent = addCommas(string2);
            secondDecimalSet = true;
            return false;
        }

        // Do nothing if a the user is entering a number and it already has a decimal. 
        return false;
    } // ***** END User clicks the decimal button *****




    // User clicks any number button- displays the first numbers being entered 
    // before an operator sign is selected
    if (firstNumber) {

        // Don't let the user add more than 9 integers in the first number
        if (firstIntegerCount > 8) {
            return false;
        }

        // Handles what to do if there is a leading 0
        if ((string1.length > 0) && (string1.charAt(0) === '0')) {

            // Do not remove the leading 0 if the number starts with a decimal
            if ((string1.charAt(1) === '.')) {
                string1 = string1 + target.textContent;
                display.textContent = addCommas(string1);
                firstIntegerCount++;
                return false;
            }

            // Remove the leading 0 when the user enters a number
            string1 = string1.slice(1);
            string1 = string1 + target.textContent;
            display.textContent = string1;
            return false;
        }
        
        // Display the numbers normally if there is not a leading 0 which is handled above
        string1 = string1 + target.textContent;
        display.textContent = addCommas(string1);
        firstIntegerCount++;
        return false;
    }

    // User clicks any number button- displays the second numbers being entered
    // after an operator sign is selected
    if (!firstNumber) {

        // Don't let user add more than 9 integers in the second number
        if (secondIntegerCount > 8) {
            return false;
        }
        
        // Handles what to do if there is a leading 0
        if ((string2.length > 0) && (string2.charAt(0) === '0')) {

            // Do not remove the leading 0 if the number starts with a decimal
            if ((string2.charAt(1) === '.')) {
                string2 = string2 + target.textContent;
                display.textContent = addCommas(string2);
                secondIntegerCount++;
                return false;
            }

            // Remove the leading 0 when the user enters a numb
            string2 = string2.slice(1);
            string2 = string2 + target.textContent;
            display.textContent = string2;
            return false;
        }

        // Display the numbers normally if there is not a leading 0 which is handled above
        string2 = string2 + target.textContent;
        display.textContent = addCommas(string2);
        secondIntegerCount++;
        return false;
    }


}
// END EVENT LISTENER FOR ANY CLICK INSIDE THE MAIN BOX









// *** START ADD COMMAS FUNCTION ***
// This function takes a number represented as a string and adds the correct number of commas.
// Ex: the string '1000000' would return the string '1,000,000' 
function addCommas(number) {
    
    var upToDecimal = 0;
    var negativeResult = false;

    // This counts the number of digits in the string up to a decimal point. 
    for (var i = 0; i < number.length; i++) {
        if (number.charAt(i) === '.') {
            break;
        }
        upToDecimal++;

        // If the final result is a negative number, the minus sign should not count as a digit. 
        if (number.charAt(i) === '-') {
            upToDecimal--;
            negativeResult = true;
        }
    }

    

    // Add a single comma for numbers between 1,000 and 999,999. Also handles if the result is a negative number. 
    if (upToDecimal === 4) {
        if (negativeResult === true) {
            number = number.slice(0, 2) + ',' + number.slice(2);
            return number;
        }
        number = number.slice(0, 1) + ',' + number.slice(1);
    }

    if (upToDecimal === 5) {
        if (negativeResult === true) {
            number = number.slice(0, 3) + ',' + number.slice(3);
            return number;
        }
        number = number.slice(0, 2) + ',' + number.slice(2);
    }

    if (upToDecimal === 6) {
        if (negativeResult === true) {
            number = number.slice(0, 4) + ',' + number.slice(4);
            return number;
        }
        number = number.slice(0, 3) + ',' + number.slice(3);
    }



    // Add two commas for numbers between 1,000,000 and 999,999,999
    if (upToDecimal === 7) {
        if (negativeResult === true) {
            number = number.slice(0, 2) + ',' + number.slice(2, 5) + ',' + number.slice(5);
            return number;
        }
        number = number.slice(0, 1) + ',' + number.slice(1, 4) + ',' + number.slice(4);
    }

    if (upToDecimal === 8) {
        if (negativeResult === true) {
            number = number.slice(0, 3) + ',' + number.slice(3, 6) + ',' + number.slice(6);
            return number;
        }
        number = number.slice(0, 2) + ',' + number.slice(2, 5) + ',' + number.slice(5);
    }

    if (upToDecimal === 9) {
        if (negativeResult ===true) {
            number = number.slice(0, 4) + ',' + number.slice(4, 7) + ',' + number.slice(7);
            return number;
        }
        number = number.slice(0, 3) + ',' + number.slice(3, 6) + ',' + number.slice(6);
    }

    
    return number;
}
// *** END ADD COMMAS FUNCTION ***


calc.addEventListener('click', buttonPress);