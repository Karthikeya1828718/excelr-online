
import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/FetchUsers.css';

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    axios.get('https://dummyjson.com/users')
      .then((res) => setUsers(res.data.users))  // ✅ Corrected this line
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {
          users.map((user) => (
            <div className="card" key={user.id}>
              <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
              <h3>{`${user.firstName} ${user.lastName}`}</h3>
              <p className="age">Age: {user.age}</p>
              <p className="age">Gender: {user.gender}</p>
              <p className="email">Email: {user.email}</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default FetchUsers;
