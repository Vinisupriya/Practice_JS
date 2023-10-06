/* Function */

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
array 