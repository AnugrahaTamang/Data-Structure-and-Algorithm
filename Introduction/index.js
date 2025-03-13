//This is the data structure
const studentName = ["ramit", "anugraha", "vandai", "hari"];
//'this is the algorithm
const findStudent = (allstudent, studenName) => {
  for (let i = 0; i < allstudent.length; i++) {
    if (allstudent[i] === studenName) {
      console.log(`found: ${studenName}`);
    } else {
      console.log(`Not found the ${studenName}`);
    }
  }
};
findStudent(studentName, "ramit");
findStudent(studentName, "ram");
