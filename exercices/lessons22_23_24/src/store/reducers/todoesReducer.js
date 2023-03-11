// Initila TodosState

import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

// Initialy todoes is empty
let initialState = [];

export const todoesReducer = (state=initialState, action) => {
    switch (action.type) {
        // anyadimos todo lo que trae el estado y la info del payload, tambien indicamos completed
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
        // buscamos el todo en el estado y canviamos el valor de completed
        case TOGGLE_TODO:
            return state.map((todo) => 
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo
            )
        // siempre devolveremos el estado, por si accede otro elemento 
        default:
            return state;
    }
}
