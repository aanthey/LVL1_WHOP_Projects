//init students array
const students = [];

//add student
function addStudent(name, grade) {
    students.push({
        name,
        grade
    });
}

//function to remove student
function removeStudent(name) {
    const index = students.findIndex(student => student.name === name);

    if (index !== -1){
        students.splice(index,1);
        console.log(name, "has been removed");
    } else {
        console.log(name, "was not found");
    }
}

//function to filter students
function filterTopStudents(minGrade){
    return students.filter(student => student.grade >= minGrade);
}

//function to map students in formatted list
function formatStudentList(){
    return students.map(student => `${student.name} - Grade: ${student.grade}`);

}

//start
console.log("students =",students);

//add
addStudent("Arvind",55);
addStudent("Arjun",90);
addStudent("Sanket",85);
addStudent("Bill",77);
addStudent("Karl",54);
addStudent("Phill",92);
addStudent("Charlie",80);

console.log("Student List");
console.log(formatStudentList());

removeStudent("Sanket");

console.log("Student List");
console.log(formatStudentList());

console.log("Student with Grade equal to or higher than 80");
console.log(filterTopStudents(80));