import { GradientButton, type GradientButtonProps } from '@un0z/ui/awesome';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      children: 'Get a Demo',
      glow: true,
      size: {
        options: ['large', 'normal', 'small'],
        value: 'large',
      },
    },
    { store },
  ) as GradientButtonProps;

  return (
    <StoryBook levaStore={store}>
      <GradientButton {...control} />
    </StoryBook>
  );
};
