---
nav: Brand
group: Combine
title: Un0z
description: A versatile brand component for displaying the Un0z logo in various styles including colored icon, monochrome, text, and combined formats.
apiHeader:
  pkg: '@un0z/ui/brand'
  docUrl: 'https://github.com/un0z/ui/tree/master/src/brand/Un0z/index.md'
  sourceUrl: 'https://github.com/un0z/ui/tree/master/src/brand/Un0z/index.tsx'
---

## Example

```tsx
import { Un0z } from '@un0z/ui/brand';

import { Flexbox } from '@/Flex';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Un0z size={64} />
    <Un0z size={64} type={'mono'} />
    <Un0z size={64} type={'flat'} />
    <Un0z size={64} type={'text'} />
    <Un0z size={64} type={'combine'} />
    <Un0z size={64} extra={'AI Platform'} />
    <Un0z size={64} type={'combine'} extra={'AI Platform'} />
  </Flexbox>
);
```

## API

| Property  | Description                                            | Type                                              | Default |
| --------- | ------------------------------------------------------ | ------------------------------------------------- | ------- |
| type      | The style variant of the Un0z logo                     | `'3d' \| 'flat' \| 'mono' \| 'text' \| 'combine'` | `'3d'`  |
| size      | The size of the logo in pixels                         | `number`                                          | `32`    |
| extra     | Additional text or element to display next to the logo | `ReactNode`                                       | -       |
| className | CSS class name                                         | `string`                                          | -       |
| style     | Inline style object                                    | `CSSProperties`                                   | -       |
