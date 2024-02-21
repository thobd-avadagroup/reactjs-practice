import {useState} from "react";

function TotoForm({addTodo}) {
  const [inputValue, setInputValue] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    if (!inputValue) {
      return
    }
    addTodo(inputValue);
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className="input"
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      />
    </form>
  );
}

export default TotoForm;