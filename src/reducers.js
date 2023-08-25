// reducers.js
const initialState = {
  contacts: [],
  isModalOpen: false,
  selectedContact: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };

    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        selectedContact: action.payload,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        selectedContact: null,
      };

    default:
      return state;
  }
};

export default contactReducer;
