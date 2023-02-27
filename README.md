# TodoList Using React.js

Deployed on : https://rk344300.github.io/ReactJs---TodoList-/

Overview : A TodoList App made using React.js , ContextAPI and jsonplaceholder

# API Reference

API : https://jsonplaceholder.typicode.com/todos

# Run Locally

Clone the project

install the nodemodules from package.json:

`npm install`

finally start it on your local server

`npm start`

open http://localhost:3000 to view it in your browser

# Feature

- create : create a new TodoList
- Read : get all the todoList and display
- update : edit the existing list and make request to API
- delete : delete the list

# Folder Structure

src
├── api
│ └── index.js
├── components
│ ├── App.js
│ ├── index.js
│ ├── TodoList.js
│ └── TodoListContainer.js
├── css
│ └── App.css
├── hooks
│ └── todoHooks.js
├── providers
│ └── todoProvider.js
├── Utils
│ └── constants.js
├── index.css
└── index.js
