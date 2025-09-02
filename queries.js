// ==========================
// Task 1: Insert Documents

// Added via compass

// ==========================
// Task 2: Query Operations
// ==========================

// 1. Filtering: Find books published after 2015
db.books.find({ published_year: { $gt: 2015 } })

// 2. Projection: Show only title and author (hide _id)
db.books.find({}, { title: 1, author: 1, _id: 0 })

// 3. Sorting: Order books by price descending
db.books.find().sort({ price: -1 })

// 4. Pagination: Skip first 5, show next 5
db.books.find().skip(5).limit(5)

// 5. Combining filter and projection: Finding fantasy books and showing the title
db.books.find({ genre: "Fantasy" }, { title: 1, _id: 0 })



// ==========================
// Task 3: Aggregation Pipeline
// ==========================

// 1. Group books by genre and counts how many books per genre
db.books.aggregate([
  { $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
])

// 2. Group books by author and calculates the average price
db.books.aggregate([
  { $group: { _id: "$author", avgPrice: { $avg: "$price" } } }
])

// 3. Matches books in the "Thriller" genre and sort by price ascending
db.books.aggregate([
  { $match: { genre: "Thriller" } },
  { $sort: { price: 1 } }
])

// 4. Projects title and price only, hides _id
db.books.aggregate([
  { $project: { title: 1, price: 1, _id: 0 } }
])

// 5. Counts how many books were published after 2010
db.books.aggregate([
  { $match: { published_year: { $gt: 2010 } } },
  { $count: "booksAfter2010" }
])
// ==========================
// Task 4: Indexing
// ==========================

// 1. Create an index on the title field
db.books.createIndex({ title: 1 })

// 2. Create a compound index on author and genre
db.books.createIndex({ author: 1, genre: 1 })

// 3. View all indexes on the books collection
db.books.getIndexes()

// 4. Drop the index on title (if needed)
db.books.dropIndex("title_1")
