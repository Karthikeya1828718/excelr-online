import "./App.css";
import FetchProducts from "./components/FetchProducts";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FetchUsers from "./components/FetchUsers";
import SearchInput from "./components/SearchInput";
import DeleteProduct from "./components/DeleteProduct";
import UpdateProduct from "./components/UpdateProduct";
import EditProduct from "./components/EditProduct";
import SaveProduct from "./components/SaveProduct";
function App() {
  return (
    <>
      <BrowserRouter>
       
       <Navbar/>


      

        <Routes>
          <Route path="/saveProduct" element={<SaveProduct />}></Route>
          <Route path="/products" element={<FetchProducts />}></Route>
          <Route path="/users" element={<FetchUsers />}></Route>
          <Route path="/deleteProduct" element={<DeleteProduct />}></Route>
          <Route path="/updateProduct" element={<UpdateProduct />}></Route>
          <Route path="/editProduct/:id" element={<EditProduct />}></Route>
           <Route path="/search/:name" element={<SearchInput />}></Route>
          {/* try to fetch list of users */}

          
          {/* <Route path="/deleteUser/:id" element={<DeleteUser />}></Route>
          <Route path="/updateUser/:id" element={<UpdateUser />}></Route> */}
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
