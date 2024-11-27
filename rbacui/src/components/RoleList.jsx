import React from "react";

const RoleList = ({ roles = [], onEdit, onDelete }) => {
    return (
      <div id="roles" className="container mt-4">
        <h2>Role Management</h2>
        <button className="btn btn-primary mb-3" onClick={() => onEdit(null)}>
          Add Role
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.length > 0 ? (
              roles.map((role) => (
                <tr key={role.id}>
                  <td>{role.name}</td>
                  <td>{role.permissions.join(", ")}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => onEdit(role)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(role.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No roles available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
  

export default RoleList;
