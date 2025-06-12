//forEach loop :-it is used for arrays only,it is a method actually.| syntax:- arrname.forEach(callBackFunction)
//what is a method:- when we associate a function with object/data structure or datatype.
//what is a callBackFunction:- any function that is passed as an argument onto another Function.
//example:-
arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function printval(val) {
  // here val stands for each value at each index.
  console.log(val);
});

arr1.forEach((val) => {
  console.log(val.toString());
});

arr2 = ["Ironman", "Ant-man", "Hulk", "Thor"];
arr2.forEach(function myfun(str) {
  console.log(str);
});

//generally we pass this callback function as arrow functions.
arr2.forEach((str) => {
  console.log(str);
});

arr3 = ["Mussoorie", "Dehradun", "Shimla", "Jibhi", "Kasaul"];
arr3.forEach(function cities(place) {
  console.log(place);
});

arr3.forEach((city, idx, arr3) => {
  // we can pass idx and array too as parameters if we want.
  console.log(city.toUpperCase(), idx, arr3);
});

//Bonus question:-What are higher order functions?
//these are the functions that take another function as parameter into them or returns function as an output.

arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let calcsq = (sq) => {
  let sqr = sq * sq;
  console.log(sqr);
};
arr4.forEach(calcsq);

//Some more important and frequently used methods|part of modern javascript
// 1.Map method:- similar to forEach method,used for performing operations over values,only difference is that it returns a new array after performing operations whereas forEach only performs the operation over existing array and does not return any new array.
Bikes=["z900","rc200","rs200","zx10r","s1000rr","310rr","s10rr"];
Bikes.map((model) =>{
    console.log(model.toUpperCase());
});

let newarr = Bikes.map((bike) => {//storing the same arr into new array using map.
    return bike.toUpperCase();
});
console.log(newarr);
//generally we use map when we want to create a new array after performing some operation over the values of existing array.

//2. filter method:-creates a new array of elements that give true values for a condition.In simple words,it filters out the value that you want.Eg:-
//it returns a new array after performing operation to existing array.
let arr = [1, 2, 3, 4, 6, 8, 7, 9, 22];
let even = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(even);


//3.reduce method:-performs some operations and reduce the array to a single value.it returns that single value.like when we have multiple input values but we want a single value as ouput.
let newar = [1, 56, 98, 45, 43];
let sum = newar.reduce((accumulator, current_val) => {
    return accumulator + current_val;

});
console.log(sum);

arr5= [56, 78, 43, 90, 3643];
let max = arr5.reduce((prev_val, curr_val) => {
    return prev_val > curr_val ? prev_val : curr_val;
});

console.log(max);

//practice ques
marks=[78,49,58,65,90,99,92];
let score=marks.filter((val1) =>{
    return val1>90;
});

console.log(score);

let n = prompt("enter the number");
let arr6 = [];

for(let i=1; i<=n; i++){
    arr6[i-1] = i;
}

console.log(arr6);

let sum1=arr6.reduce((pre_v,cur_v) => {
    return pre_v+cur_v;
})
console.log(sum1);

let fact = arr6.reduce((prev_v,current_v) => {
    return prev_v*current_v;
})
console.log(fact);