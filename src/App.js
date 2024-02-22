import { useState } from 'react';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Button, Card, Page } from '@shopify/polaris';
import AppTopBar from './components/TopBar';
import Todo from './components/Todo';
import AddTodoModal from './components/AddTodoModal';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'Learn about React', isCompleted: false },
    { id: 2, text: 'Meet friend for lunch', isCompleted: true },
    { id: 3, text: 'Build really cool todo app', isCompleted: false }
  ]);

  const [isModalActive, setIsModalActive] = useState(false);

  const addTodoHandler = (text) => {
    let newTodo = {
      id: Date.now(),
      text
    };

    setTodoList((prevState) => [...prevState, newTodo]);
  };

  const updateTodoStatusHandler = (id) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }

        return todo;
      });
    });
  };

  const updateTodoStatusBulkHandler = (ids, status) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (ids.includes(todo.id)) {
          console.log({ ...todo, isCompleted: status });
          return { ...todo, isCompleted: true };
        }

        return todo;
      });
    });
  };

  const removeTodoHandler = (id) => {
    setTodoList((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const removeTodoBulkHandler = (ids) => {
    setTodoList((prevState) => {
      return prevState.filter((todo) => {
        return !ids.includes(todo.id);
      });
    });
  };

  let primaryPageButton = (
    <Button variant="primary" onClick={() => setIsModalActive(true)}>
      Create
    </Button>
  );

  return (
    <AppProvider i18n={enTranslations}>
      <AppTopBar />
      <Page title="Todos" primaryAction={primaryPageButton}>
        {isModalActive && (
          <AddTodoModal addTodo={addTodoHandler} onInActive={() => setIsModalActive(false)} />
        )}
        <Card sectioned>
          <Todo
            todoList={todoList}
            updateTodoStatus={updateTodoStatusHandler}
            updateTodoStatusBulk={updateTodoStatusBulkHandler}
            removeTodo={removeTodoHandler}
            removeTodoBulk={removeTodoBulkHandler}
          />
        </Card>
      </Page>
    </AppProvider>
  );
}

export default App;
