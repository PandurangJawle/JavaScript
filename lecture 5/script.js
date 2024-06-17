// //functions
// let obj={
//     name:"hello",
//     age:54,
//     weight:34,
//     height:6,
//     greet:function (){
//         console.log("hello")
//     }
// };

// console.log(obj)
// obj.greet();


// //Arrays
// let  arr=[1,2,3,4,5,];
// console.log(arr)
// console.log(arr[4])

// let arr2=new Array('Hello',1,true);
// console.log(arr2)

// console.log(typeof(arr))
// console.log(typeof(arr2))

// let  arr=[1,2,3,4,5,];
// console.log(arr)
// arr.push(6)
// arr.shift();
// arr.unshift('hello')
// arr.slice(2,4)
// console.log(arr)
// console.log(arr.slice(2,4))
// arr.splice(1,2,'hi')
// console.log(arr)

//map
// let arr= [2,3,4,5,6]

// let ans= arr.map((number) =>{
//   return number*number;
// })

// console.log(ans)



// //filters
// let arr=[1,23,'hello',5,'hi']

//  let ans=arr.filter((value)=> {

//     if (typeof(value) =='string') {
//         return true;
        
//     }
//     else {
//         return false;
//     }

// });

// console.log(ans)




// //reduce
// let arr=[10,20,30,40]

// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// })

// console.log(ans)



// //sort
// let arr=[2,4,5,1,8,9]
// arr.sort();
// arr.reverse()

// console.log(arr)


// let arr=[2,4,5,1,8,9]
// console.log(arr.indexOf(8));



// //forEach
// let arr=[10,20,30]

// arr.forEach((value, index)=>{
//     console.log("Number:",value,"index:",index)
// })



// //forin
// let obj={
//         name:"hello",
//         age:54,
//         weight:34,
//         height:6,
//         greet:function (){
//             console.log("hello")
//         }
//     };
//     for(let key in obj){
//         console.log(key)
//     }



// //for-of
// let arr=[10,20,30,40]
// for (let value of arr){
//     console.log(value)
// }



//array with function
let arr=[10,20,30,40,50]
function getSum(arr){
    let len = arr.length;
    let sum=0;
    // for (let index = 0; index < len; index++) {
    //     sum = sum+arr[index]
        
    // }
    // return sum;

    arr.forEach((value) => {
        sum = sum+value
    });
    return sum;
}
let totalSum=getSum(arr)
console.log(totalSum)

