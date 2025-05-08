import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Kids from "./components/Kids";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>

           <Route path="/dashboard/mens/:type" element={<Mens />}></Route>
           <Route path="/dashboard/womens/:type/:color" element={<Womens />}></Route>
           <Route path="/dashboard/kids" element={<Kids />}></Route>

          </Route>
          <Route path="/error" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
