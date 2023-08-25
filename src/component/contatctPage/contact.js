import React, { useState } from "react";
import ContactForm from "./contactForm";
import ContactList from "./contactList";
import Modal from "./modal";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedContact(null);
  };

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
    closeModal();
  };

  const editContact = (contact) => {
    setSelectedContact(contact);
    openModal();
  };

  const deleteContact = (contact) => {
    const updatedContacts = contacts.filter((c) => c !== contact);
    setContacts(updatedContacts);
    setSelectedContact(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center mb-4">Contact Management</h1>

      <button className="btn btn-primary" onClick={openModal}>
        Add Contact
      </button>
      <ContactList
        contacts={contacts}
        onDeleteContact={deleteContact}
        onEditContact={editContact}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm
          onAddContact={addContact}
          selectedContact={selectedContact}
          onClose={closeModal}
        />
      </Modal>
    </div>
  );
}

export default Contact;
