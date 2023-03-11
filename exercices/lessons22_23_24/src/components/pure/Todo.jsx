import React from 'react';
import PropTypes from 'prop-types'; 

/**
 * 
 * @param {func} onClick --> para devolver el evento al padre 
 * @param {bool} completed --> información del todo 
 * @param {string} text --> información del todo 
 * @param {number} id --> información del todo 
 * @returns un elemento de la lista
 */
const Todo = ({onClick, completed, text, id}) => {
    return (
        <li onClick={onClick} style={{
            textDecoration: completed? 'line-through': 'none',
            textDecorationColor: completed? 'green': 'none',
            color: completed? 'green': 'white'
        }}>
            {id} - {text}
        </li>
    );
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;
