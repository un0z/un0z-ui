import { Collapse, type CollapseProps } from '@un0z/ui';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

import { items } from './data';

export default () => {
  const store = useCreateStore();

  const control = useControls(
    {
      accordion: false,
      collapsible: true,
      gap: {
        max: 36,
        min: 0,
        step: 1,
        value: 0,
      },
      size: {
        options: ['small', 'middle', 'large'],
        value: 'middle',
      },
      variant: {
        options: ['filled', 'outlined', 'borderless'],
        value: 'filled',
      },
    },
    { store },
  ) as Partial<CollapseProps>;

  return (
    <StoryBook levaStore={store}>
      <Collapse items={items} style={{ width: '100%' }} {...control} />
    </StoryBook>
  );
};
