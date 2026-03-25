import { Toc, type TocProps } from '@un0z/ui';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

const items: TocProps['items'] = [
  {
    id: 'Default',
    title: 'Default',
  },
  {
    id: 'APIs',
    title: 'APIs',
  },
];
export default () => {
  const store = useCreateStore();
  const controls = useControls(
    {
      isMobile: false,
    },
    { store },
  ) as TocProps;

  return (
    <StoryBook levaStore={store}>
      <Toc {...controls} items={items} />
    </StoryBook>
  );
};
