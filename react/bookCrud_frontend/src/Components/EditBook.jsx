import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
  const { id, title, author, price, genre } = useParams();
  const navigate = useNavigate();

  const bookTitle = useRef();
  const bookAuthor = useRef();
  const bookPrice = useRef();
  const bookGenre = useRef();

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedBook = {
      title: bookTitle.current.value,
      author: bookAuthor.current.value,
      price: bookPrice.current.value,
      genre: bookGenre.current.value,
    };

    axios.put(`http://localhost:5000/books/updateBook/${id}`, updatedBook)
      .then(res => {
        alert("Book updated successfully!");
        navigate("/"); 
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <form onSubmit={handleUpdate}>
        <input type="text" defaultValue={title} placeholder='title' ref={bookTitle} />
        <br /><br />
        <input type="text" defaultValue={author} placeholder='author' ref={bookAuthor} />
        <br /><br />
        <input type="text" defaultValue={price} placeholder='price' ref={bookPrice} />
        <br /><br />
        <input type="text" defaultValue={genre} placeholder='genre' ref={bookGenre} />
        <br /><br />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditBook;
