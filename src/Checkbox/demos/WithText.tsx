import { Checkbox } from '@un0z/ui';

import { Center } from '@/Flex';

export default () => {
  return (
    <Center gap={16}>
      <Checkbox checked>Checkbox with text</Checkbox>
      <Checkbox checked size={20} textProps={{ fontSize: 20, strong: true }}>
        Checked checkbox
      </Checkbox>
    </Center>
  );
};
