---
nav: Brand
group: Combine
title: Vega AI 
description: A brand component for displaying the Vega AI icon.
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
  </Flexbox>
);
```

## APIs

| Property  | Description                                            | Type                                              | Default |
| --------- | ------------------------------------------------------ | ------------------------------------------------- | ------- |
| size      | The size of the logo                                   | `number \| string`                               | `32`    |
| className | CSS class name                                         | `string`                                          | -       |
| style     | Inline style object                                    | `CSSProperties`                                   | -       |
