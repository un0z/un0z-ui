import type { ComponentType, CSSProperties, FC } from 'react';

import type { DivProps } from '@/types';

type BrandRenderableProps = {
  className?: string;
  size?: number | string;
  style?: CSSProperties;
};

export interface BrandLoadingProps {
  size?: number;
  text: ComponentType<BrandRenderableProps & Record<string, any>>;
}

const BrandLoading: FC<BrandLoadingProps & DivProps> = ({ className, size, text, ...rest }) => {
  const RenderText = text;

  return (
    <RenderText
      className={['lobe-brand-loading', className].filter(Boolean).join(' ')}
      size={size}
      {...rest}
    />
  );
};

BrandLoading.displayName = 'BrandLoading';

export default BrandLoading;
