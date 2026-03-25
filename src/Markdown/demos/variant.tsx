import { Markdown, type MarkdownProps } from '@un0z/ui';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

import { content } from './index';

export default () => {
  const store = useCreateStore();
  const options = useControls(
    {
      children: {
        rows: true,
        value: content,
      },
      variant: {
        options: ['default', 'chat'],
        value: 'chat',
      },
    },
    { store },
  ) as MarkdownProps;

  return (
    <StoryBook levaStore={store}>
      <Markdown {...options} />
    </StoryBook>
  );
};
