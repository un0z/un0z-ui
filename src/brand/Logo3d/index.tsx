'use client';

import type { ImageProps } from 'antd';
import { cssVar } from 'antd-style';
import { type FC } from 'react';

import Un0zIcon from '@/brand/Un0zIcon';
import type { ImgProps } from '@/types';

type Logo3dProps = Omit<ImgProps & ImageProps, 'width' | 'height' | 'src'> & {
  size?: number | string;
};

const Logo3d: FC<Logo3dProps> = ({ size = '1em', style, alt = 'Un0z', ...rest }) => {
  return (
    <Un0zIcon
      aria-label={alt}
      role={'img'}
      size={size}
      style={{ color: cssVar.colorText, transition: 'color 180ms ease', ...style }}
      {...(rest as any)}
    />
  );
};

Logo3d.displayName = 'Un0zLogo3d';

export default Logo3d;
