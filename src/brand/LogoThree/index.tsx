'use client';

import { useThemeMode } from 'antd-style';
import { type CSSProperties, memo, useState } from 'react';

import Spline, { type SplineProps } from '@/awesome/Spline';
import { Flexbox } from '@/Flex';
import Img from '@/Img';

const LOGO_3D = {
  dark: '/un0z-brand-assets/Icon_un0z_dark.png',
  light: '/un0z-brand-assets/Icon_un0z_light.png',
};

export interface LogoThreeProps extends Partial<SplineProps> {
  className?: string;
  size?: number;
  style?: CSSProperties;
}

const LogoThree = memo<LogoThreeProps>(({ className, style, size = 128, onLoad, ...rest }) => {
  const { isDarkMode } = useThemeMode();
  const [loading, setLoading] = useState(true);
  return (
    <Flexbox
      align={'center'}
      className={className}
      flex={'none'}
      justify={'center'}
      style={{ height: size, overflow: 'hidden', position: 'relative', width: size, ...style }}
    >
      {loading && (
        <Img
          alt={'logo'}
          height={size * 0.75}
          src={isDarkMode ? LOGO_3D.dark : LOGO_3D.light}
          style={{ height: size * 0.75, objectFit: 'contain', position: 'absolute', width: 'auto' }}
          width={'auto'}
        />
      )}
      <Spline
        scene={'https://hub-apac-1.lobeobjects.space/logo.splinecode'}
        style={{
          flex: 'none',
          height: size,
          width: size,
        }}
        onLoad={(splineApp) => {
          setLoading(false);
          onLoad?.(splineApp);
        }}
        {...rest}
      />
    </Flexbox>
  );
});

LogoThree.displayName = 'Un0zLogoThree';

export default LogoThree;
