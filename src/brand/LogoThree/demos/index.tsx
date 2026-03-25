import { LogoThree, type LogoThreeProps } from '@un0z/ui/brand';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      size: {
        max: 640,
        min: 24,
        step: 1,
        value: 200,
      },
    },
    { store },
  ) as LogoThreeProps;

  return (
    <StoryBook levaStore={store}>
      <LogoThree {...control} />
    </StoryBook>
  );
};
