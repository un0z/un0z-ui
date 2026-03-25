import { Snippet, type SnippetProps } from '@un0z/ui';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      children: 'pnpm install @un0z/ui',
      copyable: true,
      language: 'sh',
      prefix: '$',
      shadow: false,
      spotlight: false,
      variant: {
        options: ['filled', 'outlined', 'borderless'],
        value: 'filled',
      },
    },
    { store },
  ) as SnippetProps;

  return (
    <StoryBook levaStore={store}>
      <Snippet {...control} />
    </StoryBook>
  );
};
