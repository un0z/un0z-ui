---
nav: Brand
group: Combine
title: Vega
description: A versatile brand component for displaying Vega logo in various styles including 3D, flat, monochrome, text, and combined formats.
apiHeader:
  pkg: '@un0z/ui/brand'
  docUrl: 'https://github.com/un0z/ui/tree/master/src/brand/Vega/index.md'
  sourceUrl: 'https://github.com/un0z/ui/tree/master/src/brand/Vega/index.tsx'
---

## Example

```tsx
import { Vega } from '@un0z/ui/brand';

import { Flexbox } from '@/Flex';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Vega size={64} />
    <Vega size={64} type={'mono'} />
    <Vega size={64} type={'flat'} />
    <Vega size={64} type={'text'} />
    <Vega size={64} type={'combine'} />
    <Vega size={64} extra={'Discover'} />
    <Vega size={64} type={'combine'} extra={'Discover'} />
  </Flexbox>
);
```

## APIs

| Property  | Description                                            | Type                                              | Default |
| --------- | ------------------------------------------------------ | ------------------------------------------------- | ------- |
| type      | The style variant of the Vega logo                 | `'3d' \| 'flat' \| 'mono' \| 'text' \| 'combine'` | `'3d'`  |
| size      | The size of the logo in pixels                         | `number`                                          | `32`    |
| extra     | Additional text or element to display next to the logo | `ReactNode`                                       | -       |
| className | CSS class name                                         | `string`                                          | -       |
| style     | Inline style object                                    | `CSSProperties`                                   | -       |
