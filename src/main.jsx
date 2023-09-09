import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodosProvider } from "./store/todos-context";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>,
)
