---
nav: Components
group: Channel Icons
title: Lark
apiHeader:
  pkg: '@un0z/ui/icons'
  docUrl: 'https://github.com/lobehub/lobe-ui/tree/master/src/icons/Lark/index.md'
  sourceUrl: 'https://github.com/lobehub/lobe-ui/tree/master/src/icons/Lark/index.ts'
---

## Icons

```tsx
import { Lark } from '@un0z/ui/icons';

import { Flexbox } from '@/Flex';

export default () => <Lark size={64} />;
```

## Color

```tsx
import { Lark } from '@un0z/ui/icons';

import { Flexbox } from '@/Flex';

export default () => <Lark.Color size={64} />;
```

## Avatars

```tsx
import { Lark } from '@un0z/ui/icons';

import { Flexbox } from '@/Flex';

export default () => (
  <Flexbox gap={16} horizontal>
    <Lark.Avatar size={64} />
    <Lark.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```
