1. line 12 will print "3". The input 'prices' is an array of length 3. In the conditions of the for loop, it is instructed to run and increase the variable 'i' by 1 until 'i' is no longer less than 3. This means that by the time the loop stops, 'i' will be equivalent to 3. Since 'i' is declared using the keyword var, it is acessible outside of the for loop. Therefore, printing it to the console will result in the printing of "3". 

2. line 13 will print "150". Since the varible 'discountedPrice' is declared with the keyword var, it is acessible outside of the code block where it was declared, which means attempting to access it in line 13 would be allowed. The keyword var also means 'discountedPrice' was allowed be changed, so the function will print the value currently inside 'discountedPrice' after the for loop's last iteration, or "150". 
   
3. line 14 will print "150". Since the varible 'finalPrice' is declared with the keyword var, it is acessible outside of the code block where it was declared, which means attempting to access it in line 14 would be allowed. The keyword var also means 'finalPrice' was allowed be changed, so the function will print the value currently inside 'finalPrice' after the for loop's last iteration, or "150". 

4. This function will return an array, namely "[50, 100, 150]". Since the variable 'discounted' is declared with the keyword var, it is accessible at the end of the function and was able to be changed. This means returning 'discounted' would be allowed and would result in the version of 'discounted' that was changed by the rest of the code in the function.

5. Line 12 would result in an error because 'i' was declared with the variable let. This means it is not accessible outside of its code block, or the if block in this case. Line 12 is outside of the if block, so attempting to access 'i' would result in an error. 

6. Line 13 would result in an error because 'discountedPrice' was declared with the variable let. This means it is not accessible outside of its code block, or the if block in this case. Line 12 is outside of the if block, so attempting to access 'discountedPrice' would result in an error. 

7. Line 14 would print "150". Since 'finalPrice' was declared with the keyword let, it is only accessible inside of its code block and can be edited by other code in its block. Line 14 is in the same function, or code block, in which 'finalPrice' was declared, so it is allowed to access it and print the value currently inside 'finalPrice' after the for loop's last iteration, or "150".
   
8. This function will return an array , namely "[50, 100, 150]". Since the variable 'discounted' is declared with the keyword let, it is accessible at the end of the code block, or the function, and was able to be changed. This means returning 'discounted' would be allowed and would result in the version of 'discounted' that was changed by the rest of the code in the function.

9. Line 11 would result in an error because the variable 'i' was declared with the keyword let. Therefore, it is not accessible outside of its code block, or the if block in this case. Line 11 is outside of the if block, so attempting to access 'i' would result in an error. 
    
10. Line 12 would print "3". Since the variable 'length' was declared with the keyword const, it is acessible only inside of its code block - or the function. Since line 12 attempts to print length and is inside of the function, it is allowed. Also, there is no code in this function that attempts to print the const value length, no error will be produced.
     
11. This function will return an array, namely "[50, 100, 150]". Since the variable 'discounted' was declared with the keyword const, its value cannot be changed. However, the code does not attempt to change the value of 'discounted' itself, but rather change the array 'discounted' references. Therefore, no error is thrown as there is no attempt to change a const variable. Also, a const variable 'discounted' is accessible inside the code block where it is declared, which is the function in this case. Since it is returned before the function ends, it is still accessible and does not produce an error. 

12. 
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. 
    A. '32' because this is not a math expression and integer 2 maps to their exact string representation so you would be combining two strings '3' and '2' to get string '32'. 
    B. 1 because the (-) signifies a mathematical expression, so strings '3' would be converted to numbers to get the math function (3-2), which is equivalent to 1
    C. 3 because it is a mathematical expression, so null would be converted to 0 to get the expression (3+0), which is equivalent to 0.
    D. '3null' because the '3' signifies that it isn't a math expression, so null would be converted to a string and then string concatenated to produce '3null'.
    E. 4 because it is a math expression, so the true would be converted to a numerical 1 to get the expression (3+1), which is equal to 4.
    F. 0 because it is a math expression, so both false and null would be converted to numerical 0 to get the math expression (0+0), which produces 0.
    G. '3undefined' because the '3' is a string, so it is not a math expression. therefore, undefined is converted to a string and string concatenation occurs to get '3undefined'.
    H. NaN because (-) signifies a math expression, so undefined would b e converted to get a numerica NaN. Any operation with NaN would result in the production of NaN

14. 
    A. true because when attempting to compare values of different types, JS will convert the values to numbers. 3 > 2 is true numerically, so it returns true
    B. false because both are strings, so JS compares them character by character as strings. since '2' is greater than '1', it will return false. 
    C. true because when attempting to compare values of different types, JS will convert the values to numbers. 2 is equal to 2 numerically, so it returns true
    D. false because === checks the equality without type conversion. since one is a number and the other is a string, they have different types and cannot be equal
    E. false because when attempting to compare values of different types, JS will convert the values to numbers. true is converted to 1 and 1 is not equivalent to 2 numerically, so it returns false
    F. true because converting a number using the boolean converter will turn it into a boolean true. therefore, using === will return true as both sides will be of type boolean true. 

15. The == operator will perform type conversion before comparing if you are attempting to compare two values of different types. The === operator, however, will perform the comparison without type conversion regardless of input. 

16. in file part2-question16.js

17. the function above would result in the array "[2, 4, 6]". When you call the function modifyArray with the input above, the function would run the for loop for the length of the input array. this means for each value in the input array, the function modifyArray would call the doSomething function, which would multiply the value by 2, then push it to the newArr array. So, the input array "[1,2,3]" would become the array "[2,4,6]", which is what is returned. 

19. the function would ouput "
    1
    4
    3
    2
"
