
import { useState, useEffect, useContext } from "react";
import { addTodoList, deleteTodoList, editTodoList, getAllTodoList } from "../api";
import { TodoContext } from "../providers/todoProvider";

//creating custom Hook "useTodo" that will be imported to all the other components to access the  data from here
export const useTodos = () => {
    return useContext(TodoContext);
}

export const useProvideTodos = () => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editable, setEditable] = useState(false);
    const [editedData, setEditedData] = useState({});
    // in useEffect we are fetching all the todolist when the component is loaded first time
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await getAllTodoList();
            setLoading(false);
            setTodos(response.data);
        };
        fetchTodos();

    }, []);

    // this is use to add the new list
    const addTodo = async ({ userId, id, title }) => {
        const response = await addTodoList(userId, id, title);

        if (response.success) {
            response.data.id = id;
            let { userId, title } = response.data;
            const newTodo = [{ userId, id, title }, ...todos];
            setTodos(newTodo);
            // console.log("newTodo", todos);
            return;

        }
        // console.log("addtodo", response);
        throw new Error(response.message);
    }
    // this will used to edit the todolist
    const editTodo = async (title) => {
        // console.log("editedData", editedData);
        const { id, userId } = editedData;
        const response = await editTodoList(id, userId, title);
        //console.log("editdata", response);

        if (!response.success) {
            throw new Error(response.message);
        }
        const updatedTodo = todos.map((todo) => {
            if (todo.id === response.data.id) {
                todo.title = response.data.title;
            }
            return todo;
        });
        setTodos(updatedTodo);
    }
    // hanlde the delete functionality
    const deleteTodo = async (id) => {
        const response = await deleteTodoList(id);
        // console.log("deleted", response);

        if (response.success) {
            const updatedTodo = [...todos].filter((todo) => todo.id !== id);

            setTodos(updatedTodo);
            return;
        }
        throw new Error(response.message);
    }



    return {
        data: todos,
        loading,
        addTodo,
        editTodo,
        editable,
        setEditable,
        editedData,
        setEditedData,
        deleteTodo
    };
};