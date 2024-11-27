import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">RBAC Dashboard</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#users">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roles">Roles</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
