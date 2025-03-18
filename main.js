const getAverage = testScores => {
  let totalScore = 0;
  testScores.forEach(score => {
    totalScore += score;
  })
  return totalScore / testScores.length; 
};

const getGrade = studentScore => {
  if (studentScore === 100) {
    return 'A+';
  } else if (studentScore >= 90) {
    return "A";
  } else if (studentScore >= 80) {
    return 'B';
  } else if (studentScore >= 70) {
    return 'C';
  } else if (studentScore >= 60) {
    return 'D';
  } else if (studentScore < 60) {
    return 'F';
  }
}

const hasPassingGrade = studentScore => studentScore > 59;

const studentMsg = (scores, studentScore) => studentScore > 59 ? `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You passed the course.` : `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
