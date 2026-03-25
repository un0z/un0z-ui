import { Button, DropdownMenu } from '@un0z/ui';

import { items } from './data';

export default () => {
  return (
    <DropdownMenu nativeButton items={items} triggerProps={{ openOnHover: true } as any}>
      <Button>Hover to Open</Button>
    </DropdownMenu>
  );
};
