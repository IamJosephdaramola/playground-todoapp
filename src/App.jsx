

import { useState } from "react"
import { nanoid } from "nanoid";
import AddTodo from "./components/add-todo"
import Todo from "./components/todo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (value) => {
    const newTodo = {
      id: nanoid(),
      value
    }
    setTodos([newTodo, ...todos])
  }

  const onRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo => todo.id !== id));
    setTodos(updatedTodos)
  }

  const onUpdateTodo = (id, newValue) => {
    let updatedTodos = [...todos]

    updatedTodos = updatedTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          value: newValue
        }
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold underline">
        Todo App
      </h1>
      <AddTodo onAddTodo={onAddTodo} />
      <ul className="flex flex-col gap-1">
        {todos.map((todo) => <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />)}
      </ul>
    </div>
  )
}


export default App
