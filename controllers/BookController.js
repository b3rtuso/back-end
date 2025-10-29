import * as BookModel from '../models/BookModel.js';

export const fetchBooks = async (req, res) => {
    try {
        const books = await BookModel.getBooks();
        res.status(200).json({success: true, message: books});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}