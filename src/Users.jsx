import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://cd1-4797.onrender.com")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://cd1-4797.onrender.com/" + id)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="table-context">
      <div className="content">
        <a href="/create" className="btn-add">
          Add +{" "}
        </a>
        <table cellPadding="10px" border="4" className="tabular">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td className="title-style">{user.title}</td>
                  <td>{user.desc}</td>
                  <td>{user.status}</td>
                  <td>
                    <a href={`/update/${user._id}`} className="btn">
                      Update
                    </a>
                    <button
                      className="btn-danger"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
