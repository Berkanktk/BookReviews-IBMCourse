# Book Review Project by IBM 
This document provides information on the various API endpoints available for interacting with a book-related service hosted at `http://localhost:5000/`. The API allows users to perform tasks related to books, authors, reviews, and user authentication.

## 1. Get Book Information

- **Method**: GET
- **Endpoint**: `/`

This endpoint returns general information about the service.

## 2. Get Book by ISBN

- **Method**: GET
- **Endpoint**: `/isbn/{isbn}`

Retrieve a book by its ISBN (International Standard Book Number). Replace `{isbn}` with the ISBN of the book you want to retrieve.

## 3. Get Books by Author

- **Method**: GET
- **Endpoint**: `/author/{author_name}`

Retrieve a list of books by a specific author. Replace `{author_name}` with the name of the author.

## 4. Get Books by Title

- **Method**: GET
- **Endpoint**: `/title/{title}`

Retrieve a list of books with a specific title. Replace `{title}` with the title of the book.

## 5. Get Book Review

- **Method**: GET
- **Endpoint**: `/review/{review_id}`

Retrieve a specific review for a book. Replace `{review_id}` with the review ID.

## 6. Register User

- **Method**: POST
- **Endpoint**: `/register`

Register a new user by providing a username and password in the request body. Example request body:
```json
{
	"username": "Berkan",
	"password": "123456"
}
```

## 7. User Login

- **Method**: POST
- **Endpoint**: `/customer/login`

Authenticate a user by providing their username and password. Example request body:
```json
{
	"username": "Berkan",
	"password": "123456"
}
```

## 8. Update Book Review

- **Method**: PUT
- **Endpoint**: `/customer/auth/review/{review_id}`

Update a review for a book by providing a new review text. Replace `{review_id}` with the review ID and include the new review text as a query parameter, e.g., `?review=good`.

## 9. Delete Book Review

- **Method**: DELETE
- **Endpoint**: `/customer/auth/review/{review_id}`

Delete a review for a book. Replace `{review_id}` with the review ID.


