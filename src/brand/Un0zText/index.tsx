import type { CSSProperties, FC } from 'react';

import type { DivProps } from '@/types';

export interface Un0zWordmarkProps extends DivProps {
  size?: number | string;
}

const getResponsiveSize = (size: number | string) => {
  if (typeof size === 'number') {
    const minSize = Math.max(12, Math.round(size * 0.65));
    const vwSize = Math.max(2.4, Number((size / 30).toFixed(2)));
    return `clamp(${minSize}px, ${vwSize}vw, ${size}px)`;
  }

  return size;
};

const getWordmarkStyle = (size: number | string, style?: CSSProperties): CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  flex: 'none',
  maxWidth: '100%',
  lineHeight: 0.92,
  fontFamily: "'Familjen Grotesk', 'Geist', sans-serif",
  fontSize: getResponsiveSize(size),
  fontWeight: 600,
  letterSpacing: '0.02em',
  whiteSpace: 'nowrap',
  textTransform: 'uppercase',
  ...style,
});

const Un0zText: FC<Un0zWordmarkProps> = ({ className, size = '1em', style, ...rest }) => (
  <span
    aria-label="Un0z"
    className={['un0z-wordmark', className].filter(Boolean).join(' ')}
    role="img"
    style={getWordmarkStyle(size, style)}
    {...rest}
  >
    UN0Z
  </span>
);

Un0zText.displayName = 'Un0zText';

export default Un0zText;
