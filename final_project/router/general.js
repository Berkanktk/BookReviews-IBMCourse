const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(404).json({ message: "Username and password are required." });
  } else if (users[username]) {
    return res.status(404).json({ message: "Username already exists. Please choose a different username." });
  }

  users.push({ "username": username, "password": password });

  return res.status(201).json({
    message: "User " + username + " has been created successfully."
  });
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  return res.send(JSON.stringify(books, null, 4))
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn
  const numberOfBooks = Object.keys(books).length;

  if (isbn <= numberOfBooks) {
    return res.send(books[isbn])
  } else {
    return res.status(404).send('No books were found with the specified ISBN number.');
  }
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  const results = Object.values(books).filter(book => book.author === author);

  if (results.length > 0) {
    return res.send(results);
  } else {
    return res.status(404).send('No books found for the specified author.');
  }
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  const results = Object.values(books).filter(book => book.title === title);

  if (results.length > 0) {
    return res.send(results);
  } else {
    return res.status(404).send('No books found for the specified title.');
  }
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const results = Object.values(books).filter(book => book.isbn === isbn);

  if (results.length > 0) {
    return res.send(results[isbn].reviews);
  } else {
    return res.status(404).send('No reviews were found for the specified ISBN number.');
  }
});

// Get the book list available in the shop using Promises
public_users.get('/', function (req, res) {
  const bookListPromise = new Promise((resolve, reject) => {
    resolve(books);
  }
);

  bookListPromise.then((bookList) => {
    return res.send(JSON.stringify(bookList, null, 4))
  });
});

// Get book details based on ISBN using Promises
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn
  const numberOfBooks = Object.keys(books).length;

  if (isbn <= numberOfBooks) {
    return res.send(books[isbn])
  } else {
    return res.status(404).send('No books were found with the specified ISBN number.');
  }
});

// Get book details based on author using Promises
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  const results = Object.values(books).filter(book => book.author === author);

  if (results.length > 0) {
    return res.send(results);
  } else {
    return res.status(404).send('No books found for the specified author.');
  }
});

// Get all books based on title using Promises
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  const results = Object.values(books).filter(book => book.title === title);

  if (results.length > 0) {
    return res.send(results);
  } else {
    return res.status(404).send('No results were found for the specified book title.');
  }
});

module.exports.general = public_users;
