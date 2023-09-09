import TodosContainer from "./components/todos-container";
import AddTodo from "./components/add-todo"

const App = () => {

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold underline">
        Todo App
      </h1>
      <AddTodo />
      <TodosContainer
      />
    </div>

  )
}


export default App
