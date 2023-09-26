function sortStudentsByScoreDescending(students) {
    students.sort((a, b) => b.score - a.score)
    return students
}
const students = [
    { name: "A", score: 85 },
    { name: "B", score: 55 },
    { name: "C", score: 75 },
    { name: "D", score: 95 },
]
const sortedStudents = sortStudentsByScoreDescending(students);
console.log(sortedStudents);