---
nav: Brand
group: Components
title: BrandLoading
description: A loading component that displays animated Un0z wordmarks using the official brand typography.
apiHeader:
  pkg: '@un0z/ui/brand'
  docUrl: 'https://github.com/un0z/ui/tree/master/src/brand/BrandLoading/index.md'
  sourceUrl: 'https://github.com/un0z/ui/tree/master/src/brand/BrandLoading/index.tsx'
---

## Example

```tsx
import { BrandLoading, Un0zText } from '@un0z/ui/brand';

export default () => <BrandLoading text={Un0zText} size={64} />;
```

```tsx
import { BrandLoading, Un0zIcon } from '@un0z/ui/brand';

export default () => <BrandLoading text={Un0zIcon} size={80} />;
```

## APIs

| Property  | Description                                                    | Type                                          | Default    |
| --------- | -------------------------------------------------------------- | --------------------------------------------- | ---------- |
| text      | The brand component rendered with loading animation             | `ComponentType<{ className?: string; size?: number \| string; style?: CSSProperties }>` | _Required_ |
| size      | The size of the logo in pixels                                 | `number`                                      | -          |
| className | CSS class name                                                 | `string`                                      | -          |
| style     | Inline style object                                            | `CSSProperties`                               | -          |
