import React, { useState, useEffect } from "react";

const ContactForm = ({ onAddContact, selectedContact, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("active");

  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name);
      setEmail(selectedContact.email);
      setStatus(selectedContact.status);
    } else {
      setName("");
      setEmail("");
      setStatus("active");
    }
  }, [selectedContact]);

  const handleSubmit = () => {
    if (!name || !email) {
      alert("Name and email are required.");
      return;
    }

    if (selectedContact) {
      selectedContact.name = name;
      selectedContact.email = email;
      selectedContact.status = status;
      onAddContact(selectedContact);
    } else {
      onAddContact({ name, email, status });
    }

    onClose(); // Close the modal
  };

  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">
              {selectedContact ? "Edit Contact" : "Add New Contact"}
            </h2>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Status:</label>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="activeRadio"
                    value="active"
                    checked={status === "active"}
                    onChange={() => setStatus("active")}
                  />
                  <label className="form-check-label" htmlFor="activeRadio">
                    Active
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="inactiveRadio"
                    value="inactive"
                    checked={status === "inactive"}
                    onChange={() => setStatus("inactive")}
                  />
                  <label className="form-check-label" htmlFor="inactiveRadio">
                    Inactive
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  {selectedContact ? "Save Changes" : "Add Contact"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
