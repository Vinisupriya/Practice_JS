/* Function 

const calcAverage = (a+b+c) => (a+b+c)/3;
const scoreDolphins  = calcAverage (44,23,71)
const scoreKoalas = calcAverage (65,54,49)
console.log (scoreDolphins ,scoreKoalas )

const checkWiner = function (avgDolphins , avgKoalas){
 if (avgDolphins < 2*avgKoalas)
 {
    consolre.log(`Dolphins wins ${avgDolphins}` vs . ${avgKoalas})
 }else if (avgKoalas < 2*avgDolphins){
    console.log(`Koalas wins`)
 }else{
    console.log(`No one wins`)
 }
}

/* Array*/
const calsbil = function (bills){
if (bill <= 50 && bill >= 300) {
   tip = ((15 / 100) * bill)
   total = (bill + tip)
   console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`)
}
else {
   tip = ((20 / 100) * bill)
   total = (bill + tip)
   console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`)

}

}
const bills = [125,555,44];
const tips =[ calsbil(bills[0]),calsbil(bills[1]),calsbil(bills[2])];
