'use client';

import type { CSSProperties, FC } from 'react';

import type { DivProps } from '@/types';

export interface VegaProps extends DivProps {
	size?: number | string;
}

const VEGA_VIEWBOX_WIDTH = 921;
const VEGA_VIEWBOX_HEIGHT = 797;
const VEGA_ASPECT_RATIO = VEGA_VIEWBOX_WIDTH / VEGA_VIEWBOX_HEIGHT;

const getIconStyle = (size: number | string, style?: CSSProperties): CSSProperties => ({
	display: 'inline-flex',
	alignItems: 'center',
	flex: 'none',
	lineHeight: 0,
	maxWidth: '100%',
	height: size,
	width: `calc(${typeof size === 'number' ? `${size}px` : size} * ${VEGA_ASPECT_RATIO})`,
	...style,
});

const Vega: FC<VegaProps> = ({ className, size = '1em', style, ...rest }) => (
	<span
		aria-label="Vega"
		className={['vega-icon', className].filter(Boolean).join(' ')}
		role="img"
		style={getIconStyle(size, style)}
		{...rest}
	>
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			height="100%"
			viewBox={`0 0 ${VEGA_VIEWBOX_WIDTH} ${VEGA_VIEWBOX_HEIGHT}`}
			width="100%"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M460.5 797L0 7.16839e-06H921L460.5 797Z" fill="currentColor" />
		</svg>
	</span>
);

Vega.displayName = 'VegaBrand';

export default Vega;
