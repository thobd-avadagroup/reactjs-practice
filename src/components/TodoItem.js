function TodoItem({id, text, isCompleted, updateTodoStatus, removeTodo}) {
  let className = isCompleted ? "todo complete" : "todo";
  let buttonText = isCompleted ? "Undo" : "Complete";

  return (
    <div className={className}>
      {text}
      <div>
        <button onClick={() => updateTodoStatus(id)}>{buttonText}</button>
        <button onClick={() => removeTodo(id)}>X</button>
      </div>
    </div>
  )
}

export default TodoItem;