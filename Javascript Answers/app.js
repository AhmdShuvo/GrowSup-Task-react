//  1.///
console.log("Answer to the ques.1");


function add (a) {
return function(b){
return a + b;
}
}
add((5)(98))


// 2///

console.log('answer to the ques no-2');

const myFriendsIncome = [
    {
    "name": 'Rashid',
    "income": 3500
    },
    {
    "name": "Rahat",
    "income": 2450
    },
    {
    "name": "You",
    "income": 9500
    },
    {
    "name": "Rofik",
    "income": 7480
    }
    ];
    const addIncome = (obj) =>{

        let sum =0;
        let friendsIncom=0
obj.forEach(element => {

     sum= sum+element.income
     
    
});
friendsIncom=sum-9500;
console.log(friendsIncom);
    }

    addIncome(myFriendsIncome)

//3 ////
console.log('answer to the ques -3');


var baseSKU = 'kf1097'
var variationOptions = [
{
name: 'size',
options: [40, 41, 42, 43]
},
{
name: 'color',
options: ['black', 'brown', 'chocolate']
},
]
// variationOptions.map(option=>console.log(option.options[1]))
function prepareCode(base, options){

   base=baseSKU;
   const variationOption=[]
//   console.log(base);
  

    options.map(option=>variationOption.push(option.options))
    

let final =[]
let s40 =[]
let s41=[]
let s42=[]
let s43=[]
for(let i=0;i<3;i++){ 
    s40.push(base+ "-"+variationOption[1][i]+ "-" +variationOption[0][0]);
}
for(let i=0;i<3;i++){ 
    s41.push(base+ "-"+variationOption[1][i]+ "-" +variationOption[0][1]);
}
for(let i=0;i<3;i++){ 
    s42.push(base+ "-"+variationOption[1][i]+ "-" +variationOption[0][2]);
}
for(let i=0;i<3;i++){ 
    s43.push(base+ "-"+variationOption[1][i]+ "-" +variationOption[0][3]);
}
final.push(s40)
final.push(s41)
final.push(s42)
final.push(s43)
console.log(final);
}

prepareCode(baseSKU,variationOptions)

/// 
// console.log('answer to the ques -4');


// function tokenReducer(){
//     var initialToken = 3
// initialToken--
// return initialToken >= 0 ? console.log(`You have ${initialToken}
// token remaining`) : console.log(`You have no token to use`);
// }
// function productPurchasing(){
// console.log('You are purchasing a new product.')
// tokenReducer()
// }
// initialToken = 100
// productPurchasing()
// productPurchasing()

// Question no 1
// function add (a) {
//     return function(b){
//      return a + b;
//     }
//   }
// // Call add function to perform an addition between 5 and 98

// // Answer
// console.log(add(5)(98))

// // Question no 2
// // const myFriendsIncome = [
// //     {
// //         "name": 'Rashid',
// //         "income": 3500
// //     },
// //     {
// //         "name": "Rahat",
// //         "income": 2450
// //     },
// //     {
// //         "name": "You",
// //         "income": 9500
// //     },
// //     {
// //         "name": "Rofik",
// //         "income": 7480
// //     }
// // ]

// // Calculate your friends income except your income. Use Js high order functions to get extra points.

// // Answer
// const myFriendsIncome = [
//     {
//         "name": 'Rashid',
//         "income": 3500
//     },
//     {
//         "name": "Rahat",
//         "income": 2450
//     },
//     {
//         "name": "You",
//         "income": 9500
//     },
//     {
//         "name": "Rofik",
//         "income": 7480
//     }
// ]

// const addition = myFriendsIncome.filter(el => el.name !== 'You').map(el => el['income']).reduce((acc, item) => acc + item)
// console.log(addition)

// // Question no 3
// // var baseSKU = 'kf1097'
// // var variationOptions = [
// //     {
// //         name: 'size',
// //         options: [40, 41, 42, 43]
// //     },
// //     {
// //         name: 'color',
// //         options: ['black', 'brown', 'chocolate']
// //     },
// // ]

// // function prepareCode(base, options)

// // prepareCode() function will take the base and variationOptions as parameter. You have to complete the prepareCode() function to get the output as 'kf1097-black-40’
// // You have to make the code for all shoe sizes and colors. For example,
// // 'kf1097-black-40', 'kf1097-brown-40', 'kf1097-chocolate-40'
// // ... 
// // ...

// // Answer
// var baseSKU = 'kf1097'
// var variationOptions = [
//     {
//         name: 'size',
//         options: [40, 41, 42, 43]
//     },
//     {
//         name: 'color',
//         options: ['black', 'brown', 'chocolate']
//     },
// ]

// function prepareCode(base, options){
//     return options[0].options.map(size => options[1].options.map(color => `${base}-${color}-${size}`))
// }

// const p = prepareCode(baseSKU, variationOptions)
// console.log(p)

// // Question no 4
// // Bob wants to create a token counter for his users to use. Every time one particular user purchases a product there will be a reduction 
// // in their token counter.So Bob writes his code as follow: 

// // var initialToken = 3
// // function tokenReducer(){
// //     initialToken--
// //     return initialToken >= 0 ? console.log(`You have ${initialToken} token remaining`) : console.log(`You have no token to use`);
// // }

// // function productPurchasing(){
// //     console.log('You are purchasing a new product.')
// //     tokenReducer()
// // }

// // productPurchasing()
// // productPurchasing()
// // productPurchasing()
// // productPurchasing()
// // initialToken = 100
// // productPurchasing()
// // (Run above code to get a better understanding) So, now you know where bob is having
// //   	his problems. After doing some research bob found that javascript closure can solve his
// // Problem. 
// // Solve Bob’s problem.

// // Answer 
// function tokenReducer(){
//     var initialToken = 3
//     return () => {
//         initialToken--
//         return initialToken >= 0 ? console.log(`You have ${initialToken} token remaining`) : console.log(`You have no token to use`);
//     }
// }

// const token = tokenReducer()

// console.log(typeof(token))

// function productPurchasing(){
//     console.log('You are purchasing a new product.')
//     token()
// }

// productPurchasing()
// productPurchasing()
// productPurchasing()
// productPurchasing()

// Question no 5