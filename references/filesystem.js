// Sample file to create a folder
const fs = require('fs');
const path = require('path');

console.log("Folder name is  "+__dirname);

fs.mkdir(path.join(__dirname,'/test'),error => {
    
    console.log("foldercreated");
});

//Below are the examples for lamba in ecma script
// function test(){
//     return "test";
// }

// console.log(test());

// console.log((() => "test")());

// var obj= function(){
//     return "test function";
// }
// console.log(obj());

// var obj1 = 10;
// console.log(obj1);

// console.log(function(){
//     console.log("anonynomous")
// }());

// console.log(((i,j) => {
//     console.log(i);
//     console.log(j);
//     console.log(i + j);
// })('hari','test')
// );
