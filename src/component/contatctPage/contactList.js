import React from "react";

const ContactList = ({ contacts, onDeleteContact, onEditContact }) => {
  return (
    <div className="container mt-4">
      <h2 className="text">Contact List</h2>
      <ul className="list-group">
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {contact.name} - {contact.email} - {contact.status}
            </span>
            <div>
              <button
                className="btn btn-primary me-2"
                onClick={() => onEditContact(contact)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteContact(contact)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
