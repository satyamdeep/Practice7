//Objective
//1.We are giving array of marks of students. Filter out of the marks of students that score 90+.


// Using filter method
const score= [75,91,29,89,68,76,99,53,96,85];

let toppers = score.filter((val)=>{
   return val>90;
})

console.log("Top scores:",toppers);

//2. Take a number n as input from user. Create an array of numbers from 1 to n.

let n = prompt("Enter a number:")

let arr =[];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}

console.log("Number Entered:",n,"\n The arr:",arr);

//A. Use the reduce method to calculate sum of all numbers in the array.

let sum = arr.reduce((pre,cur)=> {
    return pre + cur;
})

console.log("The sum of total is:", sum);

//B. Use the reduce method to calculate product of all numbers in the array.

let factorial = arr.reduce((pre,cur)=> {
    return pre * cur;
})

console.log("The factorial is:", factorial);