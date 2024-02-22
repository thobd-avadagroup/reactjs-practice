import { useState } from 'react';
import { Badge, Card, ResourceItem, ResourceList, Text } from '@shopify/polaris';
import ActionsGroup from './ActionsGroup';

function Todo({ todoList, updateTodoStatus, updateTodoStatusBulk, removeTodo, removeTodoBulk }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const resourceName = {
    singular: 'Todo',
    plural: 'Todos'
  };

  const promotedBulkActions = [
    {
      content: 'Mark Completed',
      onAction: () => updateTodoStatusBulk(selectedItems, true)
    }
  ];

  const bulkActions = [
    {
      content: 'Mark Incomplete',
      onAction: () => updateTodoStatusBulk(selectedItems, false)
    },
    {
      content: 'Remove Todos',
      onAction: () => removeTodoBulk(selectedItems)
    }
  ];

  return (
    <Card>
      <ResourceList
        resourceName={resourceName}
        items={todoList}
        renderItem={RenderTodoItem}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        promotedBulkActions={promotedBulkActions}
        bulkActions={bulkActions}
      />
    </Card>
  );

  function RenderTodoItem(item) {
    return (
      <ResourceItem id={item.id}>
        <Text variant="bodyMd" fontWeight="bold" as="h3">
          {item.text}
        </Text>
        <Badge tone={item.isCompleted ? 'success' : 'attention'}>
          {item.isCompleted ? 'Complete' : 'Incomplete'}
        </Badge>
        <ActionsGroup
          itemId={item.id}
          itemStatus={item.isCompleted}
          updateStatusAction={updateTodoStatus}
          removeAction={removeTodo}
        />
      </ResourceItem>
    );
  }
}

export default Todo;
