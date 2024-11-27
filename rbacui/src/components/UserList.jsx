import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div id="users" className="container mt-4">
      <h2>User Management</h2>
      <button className="btn btn-primary mb-3" onClick={() => onEdit(null)}>
        Add User
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status ? "Active" : "Inactive"}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;


