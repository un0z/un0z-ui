import { Input, type InputProps } from '@un0z/ui';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

export default () => {
  const store = useCreateStore();
  const controls = useControls(
    {
      placeholder: 'Type keywords...',
      shadow: false,
      variant: {
        options: ['outlined', 'borderless', 'filled'],
        value: 'filled',
      },
    },
    { store },
  ) as InputProps;

  return (
    <StoryBook levaStore={store}>
      <Input {...controls} />
    </StoryBook>
  );
};
