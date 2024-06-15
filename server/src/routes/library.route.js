import express from "express";
import bookController from "./controllers/bookController.js";
import memberController from "./controllers/memberController.js";

const router = express.Router();

router.post("/books", bookController.addBook);
router.get("/books/:isbn", bookController.getBookByISBN);

router.post("/members", memberController.registerMember);
router.post("/members/borrow", memberController.borrowBook);
router.post("/members/return", memberController.returnBook);


export default router;
