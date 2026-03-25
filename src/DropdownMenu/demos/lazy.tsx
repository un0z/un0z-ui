import { Button, DropdownMenu } from '@un0z/ui';

export default () => {
  return (
    <DropdownMenu
      nativeButton
      items={() => [
        { key: 'new', label: 'New File' },
        { key: 'open', label: 'Open...' },
        { type: 'divider' },
        { key: 'exit', label: 'Exit' },
      ]}
    >
      <Button>Lazy Items</Button>
    </DropdownMenu>
  );
};
