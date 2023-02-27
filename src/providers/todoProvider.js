import { createContext } from "react";
import { useProvideTodos } from "../hooks/todoHooks";

//initalizing the states
const initialState = {
    todos: [],
    addTodo: () => { },
    editTodo: () => { },
    deleteTodo: () => { },
    editable: false,
    editedData: {},
    setTodo: null,
}

export const TodoContext = createContext(initialState);
// ths TodoProvider component help to provide the context to all the children 
export const TodoProvider = ({ children }) => {
    const todos = useProvideTodos();

    return (
        <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>
    )
};