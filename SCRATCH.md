Plan   
    Restate
        build a working web calculator
            create a function that adds any number of given numbers together and returns the sum.
            create a function that subtracts any number of given numbers from each other and returns the difference.
            create a function that multiplies any given numbers and returns the product.
            create a function that divides any given numbers and returns the quotient. 
            create an operate function that takes two number and an operator and calls one of your other functions, with the two numbers as arguments, depending on the operator chosen. 


    Divide
        DONE
        create a function that accpets an array of numbers and adds them together. 
            use array.reduce function. 
        DONE
        create a function that accepts an array of numbers and subtracts them. 
            use array.reduce function
        DONE
        create a function that accpets an array of numbers and multiplies them. 
            use array.reduce function 
        DONE
        create a function that accepts an array of numbers and divides them
            array.reduce.
        DONE
        Create and operate function that takes an operator and two numbers. 
            switch case or ternarery
            is the operator a string?
            if the operator is + call the addition function
            if the operator is - call the subtraction function
            if the operator is * call the multiplication function
            if the operator is / call the divide function
        DONE
        Create a function that reads the user entered number and returns it back when the equals button is pressed. 
        DONE
        Write a calculate function that works with two numbers and any single operator.
        DONE
        Write a calculate function that works with more than two numbers and any single operator.
        Update calculate function to work with multiple operators following order of operations.

        REFACTOR
            DONE
            Create a function that reads a number of any length entered by the user and prints it to the console.
                The user clicks on a number. That number is stored in a text variable, as the user clicks on each subsequent number, they are also added to the end of the text variable. When the user presses equals, the text variable is converted to a number and printed to the console. 
                Changed this to work with an array that is then converted to a text variable and finally to a number. 

            DONE
            Create a function that adds two numbers together
                The user enters the first number of any length, when they click on the plus key this number is stored in a number variable. The program then lets the user enter a second number of any length and waits for them to click on the equals key. When they click on the equals key the program converts the second number to a number variable and then calls the operate function and prints the result of the addition to the console. 
                When the user presses the plus key.
                Call the store variable function on the numbers stored in inputNumber array and store the first number in the a variable, then reset the inputNumber array to being empty. 
                The user enters the second number and presses equals. The program should pass the second number to the b variable and then call the operate function and print the final result of the sum to the console. 
                    To achieve this create a seperate function that checks to see if the a variable is null if it is, assign a value to the a variable, else, if b is null, assign the value to the b variable. 

                DONE
                Ensure that the user can also enter negative numbers using the '-' key.
                    If the user presses the minus whilst the 'inputNumber' array length is 0, add the minus symbol to the 'inputNumber' array instead of treating it as an operator. This works for both 'a' and 'b' input variables as the 'inputNumber' array is reset on the press of an operator. 
                
                DONE
                Enable functionallity for user other operators.
                    Create a 'chosenOperator' variable that keeps track of what operator the user has chosen. Use this variable when calling the operate function after pressing equals. 
                
                DONE
                Add clear functionallity to reset all variables.
                    Create a function that resets the values of all variables if clear is pressed. 
                
                DONE
                Add functionality so that the user can use the result of one calculation as the starting variable for a second calculation. This should only happen if the user presses a new operator button. If the user presses a number key instead, all variables should be cleared and the user entry treated as the beginning of a new sum
                    when the result of a calculation is returned, store it in a global 'result' variable. If the next key the user presses is an operator the value stored in the 'result' variable should be added to the 'a' variable and set the 'b' variable to null and the 'chosenOperator' variable to the chosen operator, and finally result to null, then continue as if at the halfway point of any other operation. The rest of the operation should then be able to continue as before. 
                    If the next key the user presses is a number key however, all variables should be reset. 
                
                DONE
                Ensure that calculator still works if user starts by pushing an operator key instead of a number.
                    If the user pushes an operator key first, assign the value 0 to the 'a' variable and the chosen operator as the 'chosenOperator' variable. 
                
                DONE
                Ensure calculator works if the user changes operator during a sum
                    If the 'inputNumber' array variable is null, add simply return and don't assign anything to a variable. This will ensure that that variable cannot be undefined or null when trying to perform an operation. Then assign the newly chosen operator to the 'chosenOperator' variable. 
                
                DONE
                Ensure that if the use presses equals first the calculator does not return an error and instead returns 0
                    When the user presses equals check to see if a or b are null. if they are, return 0. 

                DONE
                If the user has only entered 1 value return this instead of 0 or error. 

                Return result to display instead of just the console.
                    create and update display method that takes a string and send that to the display. 

                    


        

