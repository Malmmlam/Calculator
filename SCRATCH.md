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
        Develop the above function so that it reads the user input and return an answer to a math problem of two numbers and an operator using the functions already created. 
            The user entry will be converted to an array. What comes first if the array is sorted, operators or numbers. How are the operators sorted?
            Go through the array and store the two numbers and operator in an object. Then call the operate function using the fields of that object.

            Make an addition problem with more than two numbers work.
                It could check the entered array and make sure there are only addition opperators "+", if this is the case it can pass all the numbers to the addition function. 

        Problems to solve:
            order of operations.
                Go through the array looking for '*' or '/' if one of these is found complete the left most one first and replace those three items in the array with the result. 
                Find a '*' or '/' in an array. 
