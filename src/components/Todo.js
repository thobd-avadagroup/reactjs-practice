import TodoItem from "./TodoItem";
import TotoForm from "./TotoForm";

function Todo({todo, addTodo, updateTodoStatus, removeTodo}) {
  return (
    <div className="todo-list">
      {todo.map((item, index) =>
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          isCompleted={item.isCompleted}
          updateTodoStatus={updateTodoStatus}
          removeTodo={removeTodo}
        />
      )}
      <TotoForm addTodo={addTodo}/>
    </div>
  )
}

export default Todo;