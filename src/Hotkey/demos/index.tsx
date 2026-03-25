import { Hotkey, type HotkeyProps } from '@un0z/ui';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      compact: false,
      inverseTheme: false,
      keys: 'mod+k',
      variant: {
        options: ['filled', 'outlined', 'borderless'],
        value: 'filled',
      },
    },
    { store },
  ) as HotkeyProps;

  return (
    <StoryBook levaStore={store}>
      <Hotkey {...control} />
    </StoryBook>
  );
};
