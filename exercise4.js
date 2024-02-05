// - Create a JavaScript object to represent a Book, with properties for the title, author, and the number of pages.
// - Add a method to the object that logs a description of the book to the console.

let Book = {
  title: "You can do it",
  author: "Nobita",
  numberOfPages: "10",
  description: () => {
    console.log("This Book is all about the self believe");
  },
};

Book.description();
