import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList'

// filtrar todo list
const filterTodoes = (todoes, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todoes;

    case 'SHOW_ACTIVE':
      return todoes.filter((todo) => !todo.completed);

    case 'SHOW_COMPLETED':
      return todoes.filter((todo) => todo.completed);

    default:
      return todoes;
  }
}

// recibimos un estado y devolvemos el mapeo de los estados que hemos declarado en rootReducer
const mapStateToProps = (state) => {
  return {
    todoes: filterTodoes(state.todoesState, state.filterState)
  }
}

// devolveremos la acción que genera cambios y le indicaremos la funcion que hemos creado para cambiar el estado del todo
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

// Conectamos State y Dispach a las props de todolist
const TodoesContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoesContainer;