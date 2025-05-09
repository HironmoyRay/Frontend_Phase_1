// Problem 7:
// Suppose you are building a student database for your class that will track student’s
// names and their marks. Your class has 40 students but now you are seeing that there are
// 41 entries in your database so you decide to check the database. And you find out that
// you have mistakenly uploaded a student’s name twice.

// Task
// Write a `removeDuplicates` function that takes in an array of names and returns a new array
// with any duplicates removed.
// Sample Input:
// Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Adnan’, ‘Faiyaz’]
// Sample Output :
// Student_names = [‘Zara’, ‘Sadia’ , ‘Mahin’ , ‘Adnan’ , ‘Maisha’, ‘Faiyaz’]

function removeDuplicates(arr) {
  const newArr = [];
  newArr.push(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    newArr.forEach((el) => {
      if (el == arr[i]) {
        flag = false;
      }
    });
    if (flag == true) {
      newArr.push(arr[i]);
    }
  }

  console.log(newArr);

  return newArr;
}

removeDuplicates(["aa", "bb", "cc", "cc", "dd", "dd", "dd", "e"]);
