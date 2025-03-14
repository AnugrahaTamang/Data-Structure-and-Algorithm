// This is the data structure
const studentName = ["ramit", "anugraha", "vandai", "hari"];
//'this is the algorithm
const findStudent = (allstudent, studenName) => {
  for (let i = 0; i < allstudent.length; i++) {
    if (allstudent[i] === studenName) {
      console.log(`found: ${studenName}`);
    }
  }
};
findStudent(studentName, "ramesh");
//data structure
const data = [1, 2, 3, 4, 5];
let sum = 0;
//algorithm
for (let i = 0; i < data.length; i++) {
  sum = data[i] + sum;
  console.log(sum);
}
