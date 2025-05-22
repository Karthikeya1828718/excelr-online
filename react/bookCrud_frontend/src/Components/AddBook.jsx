import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
     let title=useRef();
     let author=useRef();
     let price=useRef();
     let genre=useRef();
     let navigate=useNavigate();
     const handleSubmit=(e)=>{
        e.preventDefault();
        let newBook={
            title:title.current.value,
            author:author.current.value,
            price:price.current.value,
            genre:genre.current.value
        }
        
        axios.post('http://localhost:5000/books/saveBook',newBook)
        .then(res=>{
            alert('book saved successfully')
            navigate('/');
        })
        .catch(err=>alert(err.message));
     }
  return (
    <>
      <form>
        <input type="text"  placeholder='title' ref={title}/>
        <br /><br />
        <input type="text" placeholder='author' ref={author}/>
        <br /><br />
        <input type="text" placeholder='price' ref={price}/>
        <br /><br />
        <input type="text" placeholder='genre' ref={genre}/>
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
      </form>

    </>
  )
}

export default AddBook