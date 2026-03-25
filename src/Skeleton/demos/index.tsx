import { Skeleton } from '@un0z/ui';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      active: true,
      avatar: true,
      paragraph: true,
      title: true,
    },
    { store },
  );

  return (
    <StoryBook levaStore={store}>
      <Skeleton {...(control as any)} />
    </StoryBook>
  );
};
