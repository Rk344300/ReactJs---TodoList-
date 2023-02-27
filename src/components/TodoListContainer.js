

import { useTodos } from "../hooks/todoHooks";
import '../css/App.css';
import { FaEdit, FaTrash } from "react-icons/fa";



const TodoListContainer = ({ todo }) => {

    const context = useTodos();

    // we we click on edit button this handleEdit function will execute
    const handleEdit = async (todoData) => {
        // console.log("editdata", todoData);
        // we are setting the editble as true and storing the value in setEditedData
        await context.setEditable(true);
        await context.setEditedData(todoData);
        // with the help of querySelector we select the input tag and populate the value in input tag to edit it
        document.querySelector(".todo-input").value = todoData.title;
    }
    // this handleDelete function help us to delete the selected list by calling the deleteTodo with the help of context
    const handleDelete = async (id) => {

        await context.deleteTodo(id);

    }

    return (

        <div className="todolist">

            <div className="todo-name">
                {/* display all the todolist title  */}
                {todo.title}
            </div>
            <div className="todolist-icon">
                {/* edit button */}
                <FaEdit onClick={() => handleEdit(todo)} />
                {/* delete button */}
                <FaTrash onClick={() => handleDelete(todo.id)} />





            </div>

        </div>




    )

}
export default TodoListContainer;