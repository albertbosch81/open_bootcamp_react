import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import AddContactForm from '../pure/forms/addContactForm';

const ContactsList = () => {

    const myself = new Contact('Albert', true);
    const other = new Contact('Juanito', false);
    const [contacts, setContacts] = useState([myself, other]);

    function changeConnection(contact){
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function addContact(contact){
        let tempContacts = [...contacts]
        console.log(contact)
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    function removeContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.pop(index);
        setContacts(tempContacts)
    }

    return (
        <div>
            <h1>Listado de contactos</h1>
            {contacts.map((contact, index) => {
                return (
                    <ContactComponent
                        key={index}
                        contact={contact}
                        changeState={changeConnection}
                        remove={removeContact}
                        >    
                    </ContactComponent>
                )
            })}
            <AddContactForm add={addContact}></AddContactForm>
        </div>
    );
}

export default ContactsList;
