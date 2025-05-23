const express = require('express');
const router = express.Router();
const Book = require('../models/bookSchema');

// GET all books
//  http://localhost:5000/books/fetchAllBooks

router.get('/fetchAllBooks', async (req, res) => {
    try {
        const books = await Book.find();
        if (books.length === 0) {
            return res.status(404).json({ message: "No books found" });
        }
        res.status(200).json({ message: "Books fetched successfully", books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//api for save book
// http://localhost:5000/books/saveBook
router.post('/saveBook', async (req, res) => {
      const{title,author,genre,price}=req.body;
      try{
        const newBook=new Book({
            title,
            author,
            genre,
            price
        })
       await newBook.save()
      res.status(201).json({message:"Book saved successfully",book:newBook});
      }
      catch(error){
        res.status(500).json({message:error.message});
      }
})

//delete book by id
// http://localhost:5000/books/deleteBook/:id

router.delete('/deleteBook/:id', async(req,res)=>{
    try{
        const book=await Book.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({message:"Book not found"});
        }
        res.status(200).json({message:"Book deleted successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})


//fetchBook by id
//  http://localhost:5000/books/fetchById/:id
router.get('/fetchById/:id', async (req, res) => {
      try{
        const {id}=req.params; 
        console.log(id);   
        const book =await Book.findById(id);
        if(!book){
            return res.status(404).json({message:"Book not found"});
        }
        res.status(200).json({message:"Book fetched successfully",book});
      }
      catch(error){
        res.status(500).json({message:error.message});
      }
})



//update a book by id
// http://localhost:5000/books/updateBook/:id

router.put('/updateBook/:id',async(req,res)=>{
     try{
       const {id}=req.params
       const {title,author,genre,price}=req.body;   
      const updatedBook =await  Book.findByIdAndUpdate(
        id,
        {title,author,genre,price},
        {new:true}
      )
      if(!updatedBook){
        return res.status(404).json({message:"Book not found"});
      }
      res.status(200).json({message:"Book updated successfully",book:updatedBook});
     }
     catch(error){
        res.status(500).json({message:error.message});
     }
})





//   http://localhost:5000/books
router.get("/", async (req, res) => {
    res.json({
        message: "Hello from book routes"
    })
})



module.exports = router;
