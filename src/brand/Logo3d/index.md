---
nav: Brand
group: Components
title: Logo3d
description: A component that renders the Un0z brand icon using official local assets with automatic light and dark variation.
apiHeader:
  pkg: '@un0z/ui/brand'
  docUrl: 'https://github.com/un0z/ui/tree/master/src/brand/Logo3d/index.md'
  sourceUrl: 'https://github.com/un0z/ui/tree/master/src/brand/Logo3d/index.tsx'
---

## Example

```tsx
import { Logo3d } from '@un0z/ui/brand';

export default () => <Logo3d size={64} />;
```

## APIs

| Property  | Description                                 | Type               | Default     |
| --------- | ------------------------------------------- | ------------------ | ----------- |
| size      | The size of the logo in pixels or CSS units | `number \| string` | `'1em'`     |
| alt       | Alternative text for the image              | `string`           | `'Un0z'` |
| className | CSS class name                              | `string`           | -           |
| style     | Inline style object                         | `CSSProperties`    | -           |

Additionally, this component accepts most properties from the Img and Ant Design's Image components, except for `width`, `height`, and `src`.
