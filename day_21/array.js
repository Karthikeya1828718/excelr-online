// let arr1=[10,20,30,40,50]

// console.log(arr1);

// let arr2=['hlo','world','this','is','array']
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr1.length);//5
// //creating array using new keyword
// let arr3=new Array(10,20,30,40,50);
// console.log(arr3);

// let arr4=new Array(3);//[_,_,_]
// console.log(arr4);//[empty × 3]
// console.log(arr4.length);//3

// let arr5=new Array(1);//[_]
// arr5[0]=10;
// console.log(arr5);//[10]//array containing

// let arr6=Array.of('developer');
// console.log(arr6);//developer

// //accessing array values/elements/items
// let arr7=[10,20,30,40,50];
// console.log(arr7[0]);// with the help of index
// arr7[1]=10000;//updating the value of index 1
// console.log(arr7[1]);//10000
// arr7[1]=20000;//updating the value of index 2
// console.log(arr7[1]);//20000

//adding values to array
// let arr8=['this','is','array','session' ];
// console.log(arr8);
// arr8[4]=1000;
// arr8[9]=200;
// console.log(arr8.length);//10
// console.log(arr8[7]);//undefined

// arr8.push('example');//adding value to the end of array

// console.log(arr8);//[ 'this', 'is', 'array', 'session', 1000, <4 empty items>, 'example' ]

// arr8.unshift('hello');//adding value to the beginning of array
// console.log(arr8);

// //removing values from array
// arr8.pop();
// console.log(arr8);
// arr8.shift();
// console.log(arr8);

// //at method
// let arr9=[10,20,30,40,50];
// console.log(arr9.at(0));//10
// console.log(arr9.at(-1));//50
// console.log(arr9.at(8));//undefined

// let arr1 = [10, 20, 30, 40, 50];
// let squareArr = arr1.map((num, index,arr1) => num * num);
// console.log(arr1, squareArr); // [100, 400, 900, 1600, 2500]

// let arr2=['this','is','array','session'];
// let arr3=arr2.map((e) =>e.toUpperCase() );
// console.log(arr3);//[ 'THIS', 'IS', 'ARRAY', 'SESSION' ]


//let arr1 = [10, 21, 36, 45, 50];
// let arr2=arr1.filter(
//     (e,index,arr1)=>{
//          return e%2==0;//even numbers
//     }
// )
// let arr2=arr1.filter(num=>num%2==0)
// console.log(arr1);
// console.log(arr2);


// let inputArr=[6,7,8,9,10];
// let cubeArr=inputArr.map(e=>e*e*e);
// let oddArr=inputArr.filter(e=>e%2!=0);

// let outputArr=inputArr.map(e=>e*e*e).filter(e=>e%2!=0);
// console.log(inputArr);
// console.log(outputArr);


// let arr1=[1,2,3,4,5];
// let arr2=arr1.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// },1);
// console.log(arr1);//[ 1, 2, 3, 4, 5 ]
// console.log(arr2);//166


// let arr1=[1,2,3,4,5];
// console.log(arr1.includes(2));//true
// console.log(arr1.includes(2,0));//true
// console.log(arr1.includes(2,1));//true
// console.log(arr1.includes(2,2));//false



// let arr1=[1,2,3,4,5];
// let outPut=arr1.find((e,index,arr1)=>{
//     return e%2==0;//even numbers
   
// })
// console.log(outPut);
// let arr1=[1,2,3,4,5,'hello','world'];
// let outPut=arr1.find((e,index,arr1)=>{
//     return typeof e==='string'; 
// })
// console.log(outPut);//hello

let arr1=[1,2,3,4,5,6,'hello'];
let outPut=arr1.every((e,index,arr1)=>{
    return typeof e==='number'; 
})
console.log(outPut);//false

let arr2=[1,2,3,4,5,6];
let outPut2=arr1.every((e,index,arr1)=>{
    return typeof e==='number'; 
})
console.log(outPut2);//true


