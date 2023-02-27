import { useState, useRef } from 'react'


import { useTodos } from '../hooks/todoHooks';

const TodoList = () => {

    const context = useTodos();
    const [input, setInput] = useState(
        context.editable ? context.editedData.title : "");
    const [loading, setLoading] = useState(false);


    const inputRef = useRef(null);

    // this function handle the update when the update button is clicked
    const handleUpdate = async (e) => {
        e.preventDefault();

        const title = inputRef.current.value;
        setLoading(true);
        // calling the editTodo function with the help of context and setting the editable as false
        await context.editTodo(title);
        await context.setEditable(false);

        setLoading(false);
        setInput("");
        return;


    };

    // this function will call when we click on add button after writing in input tag to add a new list
    const handleSumbit = async (e) => {
        e.preventDefault();

        if (!input) return;

        setLoading(true);
        // calling addTodo function and passing the new List details
        await context.addTodo({
            userId: 1,
            id: Date.now(),
            title: input,
        });
        setLoading(false);
        setInput("");
        return;


    }


    return (


        <div className="bar-container">

            <div className="bar">

                {context.editable ? (
                    <>
                        <input
                            placeholder="update the list"
                            value={input}
                            className="todo-input"
                            onChange={(e) => setInput(e.target.value)}
                            name="title"
                            ref={inputRef}
                        />

                        <button onClick={handleUpdate} disabled={loading} className="buton">
                            {loading ? "updating..." : "update"}
                        </button>

                    </>
                ) : (
                    <>
                        <input
                            placeholder="Add a list"
                            value={input}
                            className="todo-input"
                            onChange={(e) => { setInput(e.target.value) }}
                            name="title"
                            ref={inputRef}
                            disabled={loading}
                        />
                        <button onClick={handleSumbit} className="buton" >
                            {loading ? "Adding.." : "Add"}

                        </button>
                    </>
                )
                }

            </div>


        </div>
    )
}
export default TodoList;