"use strict"


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