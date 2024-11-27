import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserModal from "./components/UserModal";
import RoleList from "./components/RoleList";
import RoleModal from "./components/RoleModal";

const App = () => {
  const [users, setUsers] = useState([]);  // Users state
  const [roles, setRoles] = useState([]);  // Roles state
  const [showUserModal, setShowUserModal] = useState(false);  // User modal state
  const [showRoleModal, setShowRoleModal] = useState(false);  // Role modal state
  const [selectedUser, setSelectedUser] = useState(null);  // Selected user for editing
  const [selectedRole, setSelectedRole] = useState(null);  // Selected role for editing

  const handleAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleAddRole = (role) => {
    setRoles((prevRoles) => [...prevRoles, role]);
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleDeleteRole = (roleId) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== roleId));
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowUserModal(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setShowRoleModal(true);
  };

  const closeUserModal = () => {
    setShowUserModal(false);
    setSelectedUser(null);
  };

  const closeRoleModal = () => {
    setShowRoleModal(false);
    setSelectedRole(null);
  };

  return (
    <div>
      <Navbar users={users} roles={roles} />
      <UserList
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
      <RoleList
        roles={roles}
        onEdit={handleEditRole}
        onDelete={handleDeleteRole}
      />
      <UserModal
        show={showUserModal}
        onClose={closeUserModal}
        onSave={handleAddUser}
        user={selectedUser}
      />
      <RoleModal
        show={showRoleModal}
        onClose={closeRoleModal}
        onSave={handleAddRole}
        role={selectedRole}
      />
    </div>
  );
};

export default App;




