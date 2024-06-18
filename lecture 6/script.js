// function sayMyName(finalName){
//     console.log(finalName);
// }

// sayMyName("Aarav")

// class human{

// }
// const obj=new human();

// function solve(number) {
//     return function (number) {
//         return number*number;
        
//     }
    
// }
// let ans=solve(5);
// let finalAns=ans(10)
// console.log(finalAns)


const arr=[
    function (a,b) {
       return a+b; 
        
    },

    function (a,b) {
        return a-b; 
         
     },

     function (a,b) {
        return a*b; 
         
     }
];

let first =arr[2];
let ans=first(5,10);
console.log(ans)