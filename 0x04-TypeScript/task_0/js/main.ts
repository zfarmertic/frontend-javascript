interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: "Erovwo",
    lastName: "Igbunuoghene",
    age : 45,
    location: "Enugu state, Nigeria"
}

const studentTwo: Student = {
    firstName: "Merit",
    lastName: "Onogbotsere",
    age: 56,
    location: "Delat state, Nigeria"
}

const studentList = [studentOne, studentTwo]

studentList.map(items => <tr>items.firstName</>)