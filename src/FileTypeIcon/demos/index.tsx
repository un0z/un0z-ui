import { FileTypeIcon, type FileTypeIconProps } from '@un0z/ui';
import { StoryBook, useControls, useCreateStore } from '@un0z/ui/storybook';

export default () => {
  const store = useCreateStore();
  const control = useControls(
    {
      color: '#F54838',
      filetype: 'pdf',
      size: {
        step: 1,
        value: 48,
      },
      type: {
        options: ['file', 'directory'],
        value: 'file',
      },
      variant: {
        options: ['color', 'mono'],
        value: 'color',
      },
    },
    { store },
  ) as FileTypeIconProps;

  return (
    <StoryBook levaStore={store}>
      <FileTypeIcon {...control} />
    </StoryBook>
  );
};
