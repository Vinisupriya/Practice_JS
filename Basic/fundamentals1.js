/* CHALLENGE #1

Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / (height * height)
(mass in kg and height in meters). */

const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const BMIMark = (massMark / (heightMark * heightMark))
const BMIJohn = (massJohn / (heightJohn * heightJohn))
console.log(BMIMark, BMIJohn)

/*CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
Print a nice output to the console, telling the user who has the higher BMI.*/

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

