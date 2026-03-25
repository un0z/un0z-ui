'use client';

import type { ImageProps } from 'antd';
import { useThemeMode } from 'antd-style';
import { type FC } from 'react';

import Un0zIcon from '@/brand/Un0zIcon';
import type { ImgProps } from '@/types';

type LogoMonoProps = Omit<ImgProps & ImageProps, 'width' | 'height' | 'src'> & {
  size?: number | string;
};

const LogoMono: FC<LogoMonoProps> = ({ size = '1em', style, alt = 'Un0z', ...rest }) => {
  const { isDarkMode } = useThemeMode();

  return (
    <Un0zIcon
      aria-label={alt}
      role={'img'}
      size={size}
      style={{ color: isDarkMode ? '#25241F' : '#EDECEC', ...style }}
      {...(rest as any)}
    />
  );
};

LogoMono.displayName = 'Un0zLogoMono';

export default LogoMono;
