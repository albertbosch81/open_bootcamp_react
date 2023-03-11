import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todoesReducer } from "./todoesReducer";

export const rootReducer = combineReducers(
    {
        // state name: reducer that will control it
        todoesState: todoesReducer,
        filterState: filterReducer
        // ...add more states and reducer to include
    }
)