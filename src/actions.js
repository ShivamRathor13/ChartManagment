export const addContact = (newContact) => ({
  type: "ADD_CONTACT",
  payload: newContact,
});

export const editContact = (contact) => ({
  type: "EDIT_CONTACT",
  payload: contact,
});

export const deleteContact = (contact) => ({
  type: "DELETE_CONTACT",
  payload: contact,
});

export const openModal = (contact) => ({
  type: "OPEN_MODAL",
  payload: contact,
});

export const closeModal = () => ({
  type: "CLOSE_MODAL",
});
