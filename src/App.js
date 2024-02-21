import './App.css';
import {useState} from "react";
import Todo from "./components/Todo";

function App() {
  const [items, setItems] = useState(
      [
        { id: 1, text: "Learn about React", isCompleted: false },
        { id: 2, text: "Meet friend for lunch", isCompleted: false },
        { id: 3, text: "Build really cool todo app", isCompleted: false }
      ]
  );

  const addTodoHandler = (text) => {
    let newTodo = {
      id: Date.now(),
      text
    }

    setItems(prevState => [...prevState, newTodo]);
  }

  const updateTodoStatusHandler = (id) => {
    setItems(prevState => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return {...todo, isCompleted: !todo.isCompleted}
        }

        return todo
      });
    })
  }

  const removeTodoHandler = (id) => {
    setItems(prevState => {
      return prevState.filter((todo) => {
        return todo.id !== id
      });
    })
  }

  return (
    <div className="app">
      <Todo
        todo={items}
        addTodo={addTodoHandler}
        updateTodoStatus={updateTodoStatusHandler}
        removeTodo={removeTodoHandler}
      />
    </div>
  );
}

export default App;
