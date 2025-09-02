[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20115851&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)


## 🛠️ Setup Instructions

This project uses a local MongoDB instance to manage book data.These are the steps I took.

### 1. Database Setup
- **Database Name**: `plp_bookstore`
- **Collection Name**: `books`
- **Documents**: Inserted via MongoDB Compass

### 2. Shell Access
- Opened the MongoDB shell using:
  ```bash
  mongosh
  ```
- Switched to the target database:
  ```js
  use plp_bookstore
  ```

### 3. Executed Queries
All queries were run directly in `mongosh`, including:

#### 📄 Query Operations
```js
db.books.find({ published_year: { $gt: 2015 } })
db.books.find({}, { title: 1, author: 1, _id: 0 })
db.books.find().sort({ price: -1 })
db.books.find().skip(5).limit(5)
db.books.find({ genre: "Fantasy" }, { title: 1, _id: 0 })
```

#### 📊 Aggregation Pipelines
```js
db.books.aggregate([
  { $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
])

db.books.aggregate([
  { $group: { _id: "$author", avgPrice: { $avg: "$price" } } }
])

db.books.aggregate([
  { $match: { genre: "Thriller" } },
  { $sort: { price: 1 } }
])

db.books.aggregate([
  { $project: { title: 1, price: 1, _id: 0 } }
])

db.books.aggregate([
  { $match: { published_year: { $gt: 2010 } } },
  { $count: "booksAfter2010" }
])
```

#### ⚙️ Indexing
```js
db.books.createIndex({ title: 1 })
db.books.createIndex({ author: 1, genre: 1 })
db.books.getIndexes()
db.books.dropIndex("title_1")
```

### 4. Validation
- Verified document presence:
  ```js
  db.books.find().pretty()
  ```
- Confirmed active indexes:
  ```js
  db.books.getIndexes()
  ```










