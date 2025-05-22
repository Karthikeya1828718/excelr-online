import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import AddBook from './Components/AddBook';
const App = () => {
  return (
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<Dashboard />} />
    <Route path='/save' element={<AddBook />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App