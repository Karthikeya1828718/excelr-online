import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';
const App = () => {
  return (
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<Dashboard />} />
    <Route path='/save' element={<AddBook />}></Route>
    <Route path='/edit/:id/:title/:author/:price/:genre' element={<EditBook />}></Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App