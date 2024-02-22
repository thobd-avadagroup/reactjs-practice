import { ButtonGroup, Button } from '@shopify/polaris';
import React from 'react';

function ActionsGroup({ itemId, itemStatus, updateStatusAction, removeAction }) {
  return (
    <ButtonGroup>
      <Button onClick={() => updateStatusAction(itemId)}>
        {itemStatus ? 'Undo' : 'Completed'}
      </Button>
      <Button tone="critical" onClick={() => removeAction(itemId)}>
        Delete
      </Button>
    </ButtonGroup>
  );
}

export default ActionsGroup;
