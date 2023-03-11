import React from 'react';
import PropTypes from 'prop-types'
import Todo from './Todo';

/**
 * 
 * @param {array} todoes --> listado de todoes 
 * @param {array} onTodoClick --> acción 
 * @returns 
 */
const TodoList = ({todoes, onTodoClick}) => {
    return (
        <div>
            <h1>Your Todoes</h1>
            <ul>
                {todoes.map((todo, index) => 
                    (<Todo 
                        key={index}
                        {...todo} //pasamos todos los props del todo
                        onClick = {() => onTodoClick(todo.id)}
                    ></Todo>)
                )}
            </ul>
        </div>
    );
}

TodoList.propTypes = {
    todoes: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            }
        ).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
