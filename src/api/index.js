

import { API_URLS } from "../utils/constants";

// in this customFetch Function we are passing the url and body as object and hanlde all API calls

const customFetch = async (url, { body, ...customConfig }) => {
    const headers = {
        "content-type": "application/json; charset=UTF-8",
    };
    // config contains the header 
    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };


    if (body) {
        //converting the body to json
        config.body = JSON.stringify(body);

    }

    try {
        //this call fetch the url and convert into json
        const response = await fetch(url, config);
        const data = await response.json();

        if (response.success || response.ok) {
            return {
                data: data,
                success: true,
            };
        }
        throw new Error(data.message);

    } catch (error) {
        // console.error("error");
        return {
            message: error.message,
            success: false,
        }
    }
};

//fetch all the Todolist from getAllTodos function 
export const getAllTodoList = () => {
    return customFetch(API_URLS.getAllTodos(), {
        method: 'GET',

    })
}
//this function help to call createNewTodo function to add the new Todo list
export const addTodoList = (userId, id, title) => {
    return customFetch(API_URLS.createNewTodo(), {
        method: "POST",
        body: {
            userId,
            id,
            title,
        }
    })
}

// this function help to edit the todolist
export const editTodoList = (id, userId, title) => {
    return customFetch(API_URLS.editTodo(id), {
        method: "PUT",
        body: {
            userId, id, title,
        },
    });
};

// to delete the todolist
export const deleteTodoList = (id) => {
    return customFetch(API_URLS.deleteTodo(id), {
        method: "DELETE",
    });
}