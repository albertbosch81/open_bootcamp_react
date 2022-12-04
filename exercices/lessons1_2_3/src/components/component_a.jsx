import React from 'react';
import { Contact } from '../models/contact.class';
import ComponentB from './component_b';


const ComponetA = () => {

    const contact_test = new Contact('Nombre', 'Apellido', 'test@test.com', true)

    return (
        <div>
            <ComponentB contact={contact_test}></ComponentB>
        </div>
    );
};


export default ComponetA;