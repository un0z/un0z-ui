import { MaterialFileTypeIcon, type MaterialFileTypeIconProps } from '@un0z/ui';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      filename: 'xxx.pdf',
      open: false,
      size: {
        step: 1,
        value: 48,
      },
      type: {
        options: ['file', 'directory'],
        value: 'file',
      },
      variant: {
        options: ['raw', 'file', 'folder'],
        value: 'raw',
      },
    },
    { store },
  ) as MaterialFileTypeIconProps;

  return (
    <StoryBook levaStore={store}>
      <MaterialFileTypeIcon {...control} />
    </StoryBook>
  );
};
