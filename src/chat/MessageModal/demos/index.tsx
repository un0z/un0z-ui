import { Button } from '@un0z/ui';
import { MessageModal } from '@un0z/ui/chat';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        open
      </Button>
      <MessageModal open={open} value={'editable text'} onOpenChange={setOpen} />
    </>
  );
};
