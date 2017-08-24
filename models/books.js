const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    serialNumber: Number,
    authorName: String,
    genre: [{
        mainGenre: { type: String, required: true, default: 1 },
        subGenre: { type: String, lowercase: true, trim: true },
        niche: { type: Number, required: true }
    }],
    steps: [String],
    source: {type: String}
})

const Book = mongoose.model('Book', booksSchema);

module.exports = Book;
