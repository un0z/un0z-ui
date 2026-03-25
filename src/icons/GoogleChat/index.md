---
nav: Components
group: Channel Icons
title: GoogleChat
apiHeader:
  pkg: '@un0z/ui/icons'
  docUrl: 'https://github.com/lobehub/lobe-ui/tree/master/src/icons/GoogleChat/index.md'
  sourceUrl: 'https://github.com/lobehub/lobe-ui/tree/master/src/icons/GoogleChat/index.ts'
---

## Icons

```tsx
import { GoogleChat } from '@un0z/ui/icons';

import { Flexbox } from '@/Flex';

export default () => <GoogleChat size={64} />;
```

## Color

```tsx
import { GoogleChat } from '@un0z/ui/icons';

import { Flexbox } from '@/Flex';

export default () => <GoogleChat.Color size={64} />;
```

## Avatars

```tsx
import { GoogleChat } from '@un0z/ui/icons';

import { Flexbox } from '@/Flex';

export default () => (
  <Flexbox gap={16} horizontal>
    <GoogleChat.Avatar size={64} />
    <GoogleChat.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```
