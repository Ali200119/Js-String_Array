"use strict"


// Homework practice

function getStudents() {
    let student1 = {
        name: "Pervin",
        email: "pervin007@gmail.com"
    }
    let student2 = {
        name: "Cinare",
        email: "cinare@gmail.com"
    }
    let student3 = {
        name: "Shaiq",
        email: "shaiq@gmail.com"
    }
    let student4 = {
        name: "Eli",
        email: "eliyev@gmail.com"
    }
    
    let students = [student1, student2, student3, student4];

    return students;
}

function getStudentCountByEmail(str) {
    let students = getStudents();

    let count = 0;

    for (const student of students) {
        if (student.email.includes(str)) {
            count++;
        }
    }

    return count;
}

// console.log(getStudentCountByEmail("e"));

const getYearOfBirth = age => {
    let date = new Date();

    return date.getFullYear() - age;
}

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

