
//API that we used to perform different operations
const URL = "https://jsonplaceholder.typicode.com";

export const API_URLS = {

    getAllTodos: () => `${URL}/todos`,
    createNewTodo: () => `${URL}/todos`,
    editTodo: (id) => `${URL}/todos/${id}`,
    deleteTodo: (id) => `${URL}/todos/${id}`

};