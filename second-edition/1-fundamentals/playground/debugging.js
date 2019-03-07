var person = {
    name: 'Dillon'
};

person.age = 22;

/*
    having debugger here allows us to jump to here when we press 'c' rather 
    than finish to completion
*/
debugger;
person.name = 'Paul';

console.log(person);

/*
    To run through the debugger in the command line run 'node inspect <name>'
    list(n) - to list the nth lines above and under the current line you're on
    n       - next step in the application
    c       - continue to completion
    repl    - Read-Eval-Print-Loop, check variable values, mess around with functions
               manipulate values etc.

    To run the debugger via chrome use 'node --inspect-brk <name>', go to 'chrome://inspect/'
    and click 'Open dedicated DevTools for Node' 
*/