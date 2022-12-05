import React, { useRef } from 'react';
import { Contact } from '../../../models/contact.class';
import PropTypes from 'prop-types';

const AddContactForm = ({ add }) => {

    const nameRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const contact = new Contact(
            nameRef.current.value,
            true,
        );
        add(contact);
    }

    return (
        <form className='mt-5' onSubmit={addContact}>
            <input ref={nameRef} type='text' required autoFocus placeholder='Introduce tu nombre' />
            <button className='btn btn-success' type='submit'>
                Entrar
            </button>
        </form>
    );
}

AddContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default AddContactForm;
