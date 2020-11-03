/*    Declare two variables with strings. Your name and your surname.

    Concat the two variables. (This is done by adding a + in between the two names) You should see the data of the two joined on the output.

    Declare another variable with the name numberVar and the value being 5.

    Type in the console numberVar * 5. What is the output?

    Create a constant with the value as your name. Try to reassign the value with your surname. Did you get an error?*/
var name = "Alex ";
document.write(name);
document.write("<br/>");
var surname = "Sassman";
document.write(surname);
document.write("<br/><br/>");
var res = name.concat(surname);
document.write("<br/><br/>");
document.write(res);
let numberVar = 5;
console.log(numberVar * 5);
document.write("<br/><br/>");
document.write(numberVar * 5);
document.write("<br/><br/>");
const person = { Name: "alex" };
let { Name } = person;
document.write(Name);
