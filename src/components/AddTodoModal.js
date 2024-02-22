import { Form, FormLayout, Modal, TextField } from '@shopify/polaris';
import { useCallback, useState } from 'react';

function AddTodoModal({ addTodo, onInActive }) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = useCallback((value) => setInputValue(value), []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    addTodo(inputValue);
    setInputValue('');
    onInActive();
  };

  const closeHandler = useCallback(() => {
    onInActive();
  }, [onInActive]);

  return (
    <Modal
      activator={<></>}
      open={true}
      onClose={closeHandler}
      title="Create Todo"
      primaryAction={{
        content: 'Create',
        onAction: onSubmitHandler
      }}
      secondaryActions={[
        {
          content: 'Cancel',
          onAction: closeHandler
        }
      ]}>
      <Modal.Section>
        <Form onSubmit={onSubmitHandler}>
          <FormLayout>
            <TextField
              value={inputValue}
              onChange={handleInputChange}
              label="Title"
              type="text"
              autoComplete={false}
            />
          </FormLayout>
        </Form>
      </Modal.Section>
    </Modal>
  );
}

export default AddTodoModal;
