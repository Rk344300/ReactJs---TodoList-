import '../css/App.css';


import { Audio } from 'react-loader-spinner';

import { useTodos } from "../hooks/todoHooks";


import TodoList from './TodoList';
import TodoListContainer from './TodoListContainer';
import { FaList } from 'react-icons/fa';

const App = () => {
  // with the help of this variable we can access all the context API present in hooks
  const context = useTodos();

  // console.log("contextData", context.data);


  return (

    <div className="App" >
      <div className="app-header">
        <FaList className="icon" />
        <h1>TodoList</h1>
      </div>
      {/* this component contains the input tag from where we can add and update the list */}
      <TodoList />

      <div className="listContainer">
        {/* Audio is used as a loader that will populate until all the data is not getting fetched */}
        {context.loading ? (<Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />)
          : (
            // passing one by one todolist to TodoLisContainer component to papulate 
            context.data.map((todo) => (

              <TodoListContainer todo={todo} key={`todo-${todo.id}`} />

            ))
          )
        }


      </div>
    </div>
  );
}

export default App;
