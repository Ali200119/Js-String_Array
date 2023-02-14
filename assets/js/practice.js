"use strict"


// Homework practice

// function getStudents() {
//     let student1 = {
//         name: "Pervin",
//         email: "pervin007@gmail.com"
//     }
//     let student2 = {
//         name: "Cinare",
//         email: "cinare@gmail.com"
//     }
//     let student3 = {
//         name: "Shaiq",
//         email: "shaiq@gmail.com"
//     }
//     let student4 = {
//         name: "Eli",
//         email: "eliyev@gmail.com"
//     }

//     let students = [student1, student2, student3, student4];

//     return students;
// }

// function getStudentCountByEmail(str) {
//     let students = getStudents();

//     let count = 0;

//     for (const student of students) {
//         if (student.email.includes(str)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(getStudentCountByEmail("e"));

// const getYearOfBirth = age => {
//     let date = new Date();

//     return date.getFullYear() - age;
// }

// console.log(getYearOfBirth(22));

// let date = new Date();

// console.log(typeof date);












// String methods






// let address = "Xetai";

// console.log(address.length);

// console.log(address[0]);

// for (let i = 0; i < address.length; i++) {
//     console.log(address[i]);
// }

// console.log(address.charAt(1));

// console.log(address.charCodeAt(2));

// document.querySelector("button").addEventListener("keypress", function (e) {
//     console.log("Pressed enter");
// })

// console.log(address.toLowerCase());

// console.log(address.toUpperCase());

// console.log(address.split(""));

// console.log(address.trim());

// console.log(address.trimEnd());

// console.log(address.trimStart());

// console.log(address.slice(1,3));

// console.log(address.slice(2));

// console.log(address.slice(-2));

// console.log(address.substring(0, 4));

// let text = "salamtttttttttt";

// if (text.length > 7) {
//     console.log(`${text.substring(0, 7)}...`);
// }

// console.log(address.substr(1, 3));

// let text = "Salam Anar bey Anar";

// console.log(text.replace("Anar", "Mubariz"));

// console.log(text.replaceAll("Anar", "Mubariz"));

// let text1 = "Hello";

// let text2 = " World";

// let result = text1.concat(text2);

// console.log(result);

// function toUpperFirstLetter(word) {
//     return word.charAt(0).toUpperCase() + word.substring(1);
//     return word.charAt(0).toUpperCase().concat(word.substring(1));
// }

// console.log(toUpperFirstLetter("hello"));

// let text = "salam";

// let result = text[0].toUpperCase();

// let res = text.replace(text.charAt(0), result);

// console.log(res);











// Array methods






// let students = ["Cavid", "Jale", "Roya", "Konul", "Jale", "Cinare", "Anar"];

// console.log(students[students.length - 1]);

// let result = students.join();

// console.log(result);

// console.log(students);

// students.push("Elekber");

// students.pop();

// students.shift();

// students.unshift("Hacker");

// console.log(students);

// function filter(arr) {
//     let result = [];

//     for (const item of arr) {
//         if (item.includes("l")) {
//             result.push(item);
//         }
//     }

//     return result;
// }

// function filter(arr, text) {
//     let result = [];

//     for (const item of arr) {
//         if (item.toLowerCase().startsWith(text.toLowerCase())) {
//             result.push(item);
//         }
//     }

//     return result;
// }

// console.log(filter(students, "R"));

// console.log(students.indexOf("Jale"));

// console.log(students.lastIndexOf("Jale"));

// console.log(students.find(s => s == "Jale"));

// console.log(students.sort());

// console.log(students.reverse());

// let numbers = [1, 3, 4, 3, 5, 6, 7];

// console.log(numbers.sort((a, b) => b - a));

// console.log(students.fill("Eli"));

// console.log(students.fill("Eli", 1, 4));

// console.log(students.every(s => s == "Cinare"));

// let arr = [10, 22, 3, 4, 50, 6, 7, 8, 9, 10];

// console.log(arr.every(n => n > 1));

// let newArr = students.entries();

// for (const item of newArr) {
//     console.log(item);
// }

// console.log(arr.findIndex(n => n > 21));

// console.log(arr.includes(22));

// console.log(Array.isArray(arr));

// let text = "Salam";

// const newArr = Array.from(text);

// newArr.forEach(element => {
//     console.log(element);
// });

// console.log(arr.slice(3, 8));

// let result = students.splice(2, 0, "Test1", "Test2")

// console.log(result);

// console.log(arr.toString());












// Convert type




// let age1 = "55";
// let age2 = "33";

// console.log(typeof age.toString());

// console.log(typeof Number(age));

// console.log(Number(age1) + Number(age2));

// console.log(typeof parseInt(age1));










// Spread and Rest operator

// function getNums(num1, ...arr) {
//     console.log(arr);
// }

// let getNums = (...arr) => {
//     console.log(arr);
// }

// getNums(1, 2, 3, 4);

// let arr1 = [1, 2, 3, 4, 5];

// let copyArr = [...arr1];

// console.log(copyArr);

// arr1[0] = 10;

// console.log(arr1);

// let user1 = {
//     name: "Shaiq",
//     address: "Ehmedli"
// }

// console.log(user1);

// let copyUser = {...user1}

// console.log(copyUser);