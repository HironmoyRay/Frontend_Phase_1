// Problem 8:
// You are giving a book stall at Dhaka International book fair and need to create a
// list of books to be featured at the event.

// Task:
// Write a function `createBookList` that takes in three parameters:
// `bookTitles`, an array of book titles, `authorNames`, an array of corresponding author names and
// ‘number of copies available’ , an array of corresponding copies available for the book.

// Write a function ‘Add Copies’ that takes two parameters :
// `bookTitle` and the number of copies you are adding to that book. The function should add copies to
// that particular book.

// Write a function ‘Sell Book’ that takes two parameters :
// `bookTitle` and the number of copies you are selling of that book. The function should deduct
// copies of that particular book.

// Write a function ‘GetDetails’ that takes no parameters and returns all the titles of the book
// in the bookTitles array ,the author names of the book in the `authorNames’ array and the number
// of copies available of the corresponding books, which should be updated after adding or selling a book..

// Sample Input:
// createBookList(‘Bohubrihi’ , ‘Humayun Ahmed’ , 10)
// Add Copies(‘Bohubrihi’ , 5)
// Updates number of copies available of Bohubrihi to 15)
// ‘Sell Book’(‘Bohubrihi’ , 3)
//  Updates number of copies available of Bohubrihi to 12)
// ‘GetDetails’()
//   Returns (“Bohubrihi” by “Humayun Ahmed” number of copies available 12)

// Hint :Make 3 arrays of the same length.

const bookTitles = [];
const authorNames = [];
const numOfCopies = [];

function createBookList(bookTitle, authorName, copies) {
  bookTitles.push(bookTitle);
  authorNames.push(authorName);
  numOfCopies.push(copies);
}

function addCopies(bookTitle, addCopies) {
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookTitles[i] === bookTitle) {
      numOfCopies[i] += addCopies;
    }
  }
//   console.log(numOfCopies);
}

function cellBook(bookTitle, numOfSellCopies) {
  for (let i = 0; i < bookTitles.length; i++) {
    if (bookTitles[i] === bookTitle) {
      numOfCopies[i] -= numOfSellCopies;
    }
  }
//   console.log(numOfCopies);
}

function GetDetails() {
  for (let i = 0; i < bookTitles.length; i++) {
    console.log(
      `${bookTitles[i]} by ${authorNames[i]} number of copies available ${numOfCopies[i]}`
    );
  }
}

createBookList("HP", "HpRay", 10);
createBookList("HM", "HmRay", 20);
createBookList("Hironmoy", "HiromoyRay", 30);

addCopies("HM", 5);

cellBook("HP", 3);

GetDetails();
