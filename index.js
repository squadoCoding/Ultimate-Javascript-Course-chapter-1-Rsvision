// Chapter-1 Variables and Datatypes:
/*
  If we talk about variables in any programming language then the variables are the names given to memory locations, in simple words we can say that they are the containers to store data.
*/
//KEYWORDS TO DECLARE VARIABLES:
// "let": 1.It has local scope.
//        2.It is recomended to use.
//        3.It cannot be redeclared
//        4.The values of variables created through this can be changed.
//        5.It doesn't requires initialization compalsorily.

// let a = 54;// declaration+initialization
// let b;// declaration
// console.log(a);
// a = 56;
// console.log(a);
// b = 2;
// console.log(b);

// "var": 1.It's scope is global
//        2.The values of variables created through this can be changed
//        3.It is not recomended to use.
//        4.It can be redeclared.
//        5.It doesn't requires initialization compalsorily.
// {
// var c = 54;
// c = "siddhant";
// console.log(c);
// }
// console.log(c);

// "const": 1.It's main feature is that it doesn't allows changing the values of variables created using it.
//          2.It's scope is local.
//          3.It is the most recomended keyword to use to declare variables (if we dont want to change them throughout the program).
//          4.It cannot be redeclared.
//          5.It requires to be initialized with declaration.

const siddhant = {
  job: "CEO of many billon dolor companies",
  salary: "5lakhs"
}
const birthday = 34;
// birthday = 56;// this will throw an error because assignment to constant variable is not possible.
console.log(birthday);
siddhant.salary = "5crore";// this can be doen with the constant objects
// siddhant = 78;// this is assignment to constant variable so it will throw an error
console.log(siddhant);

// Rules for choosing the variable names or identifiers:
// 1.It should not a reserved javascript keyword.
// 2.It cannot start with number.
// 3.It can contain alphabets, numbers, underscores(_) and $ sign.
// 4.Variable names are case sencetice in javascript.
// 3.It is recomended that you must give meaningful names to variables.

// Primitive and Non-primitive datatypes in Javascript:
// Primitive datatypes are some fundamental datatypes:
/*
1.Null
2.Number
3.Symbols
4.Strings
5.Bigint
6.Boolean
7.Undefined
*/
// In Javascript the non-primitive datatypes are objects
// Objects are basically "key: value" pairs
const pruthvi = {
  brothers: 2,
  coder: false,
  gamer: true,
  fanOf: "YesSmarty Pie"
}