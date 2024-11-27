import React, { useState, useEffect } from "react";

const RoleModal = ({ show, onClose, onSave, role }) => {
  const [formData, setFormData] = useState({
    name: role?.name || "",
    permissions: role?.permissions || [],
  });

  useEffect(() => {
    if (role) {
      setFormData({
        name: role.name,
        permissions: role.permissions,
      });
    }
  }, [role]);

  const handlePermissionToggle = (permission) => {
    setFormData((prevData) => {
      const permissions = prevData.permissions.includes(permission)
        ? prevData.permissions.filter((p) => p !== permission)
        : [...prevData.permissions, permission];
      return { ...prevData, permissions };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);  // Save data to parent component (App.js)
    onClose();
  };

  return (
    show && (
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>{role ? "Edit Role" : "Add Role"}</h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Role Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Permissions</label>
                  <div>
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes("edit")}
                      onChange={() => handlePermissionToggle("edit")}
                    />
                    <label>Edit</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes("delete")}
                      onChange={() => handlePermissionToggle("delete")}
                    />
                    <label>Delete</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes("view")}
                      onChange={() => handlePermissionToggle("view")}
                    />
                    <label>View</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default RoleModal;

