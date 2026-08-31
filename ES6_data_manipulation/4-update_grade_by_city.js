export default function updateStudentGradeByCity(students, city, newGrades) {
    const studentByCity = students.filter((student) => (student.location === city));
    console.log("------studentByCity", studentByCity);
    const result = studentByCity.map((el) => {
        const grades = newGrades.find((newGrade) => { return newGrade.studentId === el.id });
        const grade = grades.grade ? grades.grade : 'N/A'
        return {
            ...el,
            grade
        };
    });
    return result;
}
