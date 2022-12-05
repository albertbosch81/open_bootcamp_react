import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact, changeState, remove }) => {

    return (
        <div>
            <div className='contact-action'>
                {contact.connected ?
                    <div className='mt-2 p-2' style={{background: 'green'}}>
                        <span>{contact.name}</span>
                    </div>
                    :
                    <div className='mt-2 p-2' style={{background: 'red'}}>
                        <span>{contact.name}</span>
                    </div>
                }

            </div>
            <div>
                <button className='btn btn-primary col-lg-6 p-2' onClick={() => changeState(contact)}>
                    {contact.connected ?
                        <span >Desconectar</span>
                        : <span>Conectar</span>
                    }
                </button>
                <button className='btn btn-danger col-lg-6 p-2' onClick={() => remove(contact)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    changeState: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default ContactComponent;
