// Write your code here
const getStudents = (classRoom) => {
  const {hasTeachingAssistant, classList} = classRoom;
  let teacher, assistant, students;
  if (hasTeachingAssistant) {
    [teacher, assistant, ...students] = classList;
  } 
  [teacher, ...students] = classList;
  return students;
}