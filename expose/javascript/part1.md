var declaration
1. line 9 prints "values added: 20"
2. line 13 prints "final result: 20"

let declaration
3. line 9 prints "values added: 20"
4. line 13 returns an error. Declaring a variable with the let keyword means that the variable is only accessible within the block it is defined in - block scope. Since the variable 'result' is defined within the if block, it cannot be accessed by anything outside of the if. Since line 13 is outside of the if block, it does not have access to 'result' and thus, will produce an error. 

const declaration
5. line 9 returns an error. Declaring a variable 'result' with the const keyword means that it cannot be reassigned. Since line 7 attempts to reassign 'result', the code will return an error.
6. line 13 returns an error. Declaraing a varible 'result' with the const keyword means that the variable is only accessible within the block it is defined in - block scope. Since the variable 'result' is defined within the if block, it cannot be accessed by anything outside of the if. Since line 13 is outside of the if block, it does not have access to 'result' and thus, will produce an error. 