import { ChatHeader, type ChatHeaderProps } from '@un0z/ui/chat';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      showBackButton: false,
    },
    { store },
  ) as ChatHeaderProps;

  return (
    <StoryBook noPadding levaStore={store}>
      <ChatHeader {...control} left={<div>Left</div>} right={<div>Right</div>} />
    </StoryBook>
  );
};
