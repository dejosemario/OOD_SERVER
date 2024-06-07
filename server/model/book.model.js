import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  ISBN: {
    type: String,
    required: true,
    unique: true,
  },

  borrowed: {
    type: Boolean,
    default: false,
  },
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
