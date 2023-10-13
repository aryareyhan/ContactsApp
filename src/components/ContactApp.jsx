import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
import ContactInput from './ContactInput';

function ContactApp() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(getData());
  }, []);

  const onDeleteHandler = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };
  
  const onAddContactHandler = ({ name, tag }) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      {
        id: +new Date(),
        name,
        tag,
        imageUrl: '/images/gowon.jpeg',
      }
    ]);
  };  

  return (
    <div className="contact-app">
      <h1>Simple Contact App</h1>
      <h2>Create New Contact</h2>
      <ContactInput addContact={onAddContactHandler} />
      <h2>Contact List</h2>
      <ContactList contacts={contacts} onDelete={onDeleteHandler} />
    </div>
  );
}

export default ContactApp;
