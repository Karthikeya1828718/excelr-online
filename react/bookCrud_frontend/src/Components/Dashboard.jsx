import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [books, setBooks] = useState({});

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books/fetchAllBooks");
        console.log(res.data.books); // Add this
        setBooks(res.data.books); // Save data to state
        console.log(books);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <Link to={"/save"} className="btn btn-primary">Add Book</Link>

      <div className="container mt-4">
        <h2>Books List</h2>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Price</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.price}</td>
                  <td>
                    <Link to={`/edit/${book._id}`} className="btn btn-sm btn-warning me-2">
                      Edit
                    </Link>
                     </td>
                     <td>
                    <button className="btn btn-sm btn-danger" >
                      Delete
                    </button>
                 </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
