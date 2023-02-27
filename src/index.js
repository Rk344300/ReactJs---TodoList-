import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { TodoProvider } from './providers/todoProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrapping th app component with provider */}
    <TodoProvider>
      <App />
    </TodoProvider>

  </React.StrictMode>
);


