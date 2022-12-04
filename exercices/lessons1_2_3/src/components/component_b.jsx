import React from "react";
import PropTypes from 'prop-types';
import { Contact } from "../models/contact.class";


const ComponentB = ({contact}) => {

    return (
        <div>
            <h1>Tu contacto es:</h1>
            <h2>Nombre: {contact.name}</h2>
            <h2>Apellido: {contact.surname}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>Estado: {contact.connected ? 'En Línea':'No Disponible'}</h4>
        </div>
    );
};


ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ComponentB;