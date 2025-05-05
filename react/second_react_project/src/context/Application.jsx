import { useContext } from "react";
import AuthContext from "./AuthContext";

/**
 * Login
 * Dashboard
 * NavBar
 * Edit
 *
 */
const Login = () => {
    let obj={
        "username":"raj",
        "password":"123",
        "email":"raj@example.com",
        "age":20,
        "mobile":1234567890

    }
  return (
    <>
      <div>Login</div>
      <AuthContext.Provider value={obj}>
       <Dashboard />
      </AuthContext.Provider>
    </>
  );
};
const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <NavBar />
    </>
  );
};
const NavBar = () => {
  return (
    <>
      <div>Navbar</div>
      <Edit />
    </>
  );
};
const Edit = () => {
    let loginObject=useContext(AuthContext);
  return <> 
  <div>{loginObject.username} , {loginObject.email}</div>
  <div>edit</div>
  </>
};
export default Login;
