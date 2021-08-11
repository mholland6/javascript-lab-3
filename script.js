"use strict";

// 1.
let submissions = [
  {name: "Jane", score: 95, date: "2020-01-24", passed: true},
  {name: "Joe", score: 77, date: "2018-05-14", passed: true},
  {name: "Jack", score: 59, date: "2019-07-05", passed: false},
  {name: "Jill", score: 88, date: "2020-04-22", passed: true},
];

// 2
function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = { 
    name: newName,
    score: newScore,
    date: newDate, 
    passed: newScore >= 60
  }
  array.push(newSubmission);
}

addSubmission(submissions, "James", 88, "2020-08-11")
console.log(submissions);

// 3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 0);
console.log(submissions);

// 4
function deleteSubmissionByName(array, name) {
  let nameIndex = array.findIndex( (name) => submissions.name === name); 
  array.splice(nameIndex, 1);
}

deleteSubmissionByName(submissions, "James")
console.log(submissions);

// 5
function editSubmission(array, index, score) {
  let newScore = array[index].score = score;
  if (newScore >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false
  }  
}

// console.log(submissions);
// editSubmission(submissions, 0, 1);
// console.log(submissions);

// 6
function findSubmissionByName(array, name) {
  const foundObjectByName = array.find(element => element.name === name);
  return foundObjectByName;
}

console.log(findSubmissionByName(submissions, "Jack"));

//console.log(submissions);
//const jack = findSubmissionByName(submissions, "Jack");
//console.log(jack);
//let foundObjectByName = submissions.find((submission) => submission.name === "Jack");
//console.log(foundObjectByName);
// let name = submissions.find((name) => submissions.name == "Jack");
// console.log(submissions[0].name)
//


// // 7

function findLowestScore(array) {
  let lowestScore = array[0].score;
  for (let i = 0; i < array.length; i++) {
    if (array[i].score < lowestScore) {
      lowestScore = array[i].score;
    }
  }
  return lowestScore;
}

console.log(findLowestScore(submissions));

let lowScore = findLowestScore(submissions);
submissions.forEach( function (element) {
  if (element.score === lowScore) {
    console.log(element);
  }
}
)
// console.log(submissions[0].score)
// let lowScore = findLowestScore(submissions);
// console.log(lowScore);
// submissions.forEach(findLowestScore);





// 8
function findAverageScore (array) {
  let total = 0;
  for (const {score} of array) {
    total += score;
    }
  let avg = total / array.length;
  console.log(avg);
  }

  findAverageScore(submissions);

// 8
// function findAverageScore (array) {
//   let i = 0;
//   let total = 0;
//   for (let submission of submissions) {
//     if (i > array.length) {
//       break;
//     } else {
//     total += array[i].score;
//     i++;
//     }
//   }
//   let average = total / array.length;
//   console.log(average);
// }

// 8
// function findAverageScore (array) {
//   let i = 0;
//   let total = 0;
//   for (let submission of submissions) {
//     if (i > array.length) {
//       break;
//     } else {
//     total += array[i].score;
//     i++;
//     }
//   }
//   let average = total / array.length;
//   console.log(average);
// }

// findAverageScore(submissions);

// 9


let filterPassing = submissions.filter(function(element) {
  return element.score >= 60;
})
console.log(filterPassing);
 
// 10
let filter90AndAbove = submissions.filter(function(element){
  return element.score >= 90;
})
console.log(filter90AndAbove);