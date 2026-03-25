import { css, type Theme } from 'antd-style';

import { CLASSNAMES } from '@/styles/classNames';

export default (token: Theme) => css`
  :root {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;

    text-autospace: normal;
  }

  @font-face {
    font-family: 'Geist';
    font-style: normal;
    font-weight: 100 900;
    src: url('/fonts/Geist-Variable.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Geist Mono';
    font-style: normal;
    font-weight: 100 900;
    src: url('/fonts/GeistMono-Variable.woff2') format('woff2');
  }

  html {
    overscroll-behavior: none;
    color-scheme: ${token.isDarkMode ? 'dark' : 'light'};
  }

  body {
    overflow: hidden auto;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    font-family: ${token.fontFamily};
    font-size: ${token.fontSize}px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    color: ${token.colorTextBase};
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    word-wrap: break-word;
    vertical-align: baseline;

    background-color: ${token.colorBgLayout};

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Familjen Grotesk', 'Geist', ${token.fontFamily};
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  code {
    font-family: ${token.fontFamilyCode} !important;

    span {
      font-family: ${token.fontFamilyCode} !important;
    }
  }

  ::selection {
    color: #000;
    background: ${token.yellow9};

    -webkit-text-fill-color: unset !important;
  }

  * {
    scrollbar-color: ${token.colorFill} transparent;
    scrollbar-width: thin;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  @layer lobe-popup {
    .${CLASSNAMES.ContextTrigger}[data-popup-open],
      .${CLASSNAMES.DropdownMenuTrigger}[data-popup-open] {
      background: ${token.colorFillTertiary};
    }
  }

  @layer lobe-base {
    :where(.lobe-flex) {
      /* Define defaults on the element itself to avoid CSS variable inheritance leaking to nested Flex */
      --lobe-flex: 0 1 auto;
      --lobe-flex-direction: column;
      --lobe-flex-wrap: nowrap;
      --lobe-flex-justify: flex-start;
      --lobe-flex-align: stretch;
      --lobe-flex-width: auto;
      --lobe-flex-height: auto;
      --lobe-flex-padding: 0;

      /* Keep padding-inline/block aligned with padding by default, and prevent inheriting from parent */
      --lobe-flex-padding-inline: var(--lobe-flex-padding);
      --lobe-flex-padding-block: var(--lobe-flex-padding);
      --lobe-flex-gap: 0;

      display: flex;
      flex: var(--lobe-flex);
      flex-flow: var(--lobe-flex-direction) var(--lobe-flex-wrap);
      gap: var(--lobe-flex-gap);
      align-items: var(--lobe-flex-align);
      justify-content: var(--lobe-flex-justify);

      width: var(--lobe-flex-width);
      height: var(--lobe-flex-height);
      padding: var(--lobe-flex-padding);
      padding-block: var(--lobe-flex-padding-block);
      padding-inline: var(--lobe-flex-padding-inline);
    }

    .lobe-flex-hidden {
      display: none;
    }
  }

  /* Brand Loading */
  @keyframes draw {
    0% {
      stroke-dashoffset: 1000;
    }

    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    30% {
      fill-opacity: 0.05;
    }

    100% {
      fill-opacity: 1;
    }
  }

  @keyframes un0zWordmarkGlow {
    0%,
    100% {
      opacity: 0.78;
      filter: blur(0);
      transform: translateY(0);
    }

    50% {
      opacity: 1;
      filter: blur(0.2px);
      transform: translateY(-1px);
    }
  }

  @keyframes un0zWordmarkSweep {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }

  @keyframes un0zIconDrift {
    0%,
    100% {
      opacity: 0.72;
      transform: translateY(0) scale(0.985);
    }

    50% {
      opacity: 1;
      transform: translateY(-1px) scale(1);
    }
  }

  @keyframes un0zIconTone {
    0%,
    100% {
      filter: saturate(92%) brightness(0.96);
    }

    50% {
      filter: saturate(108%) brightness(1.05);
    }
  }

  .lobe-brand-loading {
    font-family: 'Familjen Grotesk', 'Geist', ${token.fontFamily};
    font-weight: 600;
    letter-spacing: 0%;
  }

  .lobe-brand-loading.un0z-wordmark {
    color: transparent;
    background-image: linear-gradient(
      90deg,
      color-mix(in srgb, currentcolor 58%, transparent) 0%,
      currentcolor 40%,
      color-mix(in srgb, currentcolor 56%, transparent) 100%
    );
    background-size: 220% 100%;
    -webkit-background-clip: text;
    background-clip: text;

    animation:
      un0zWordmarkGlow 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite,
      un0zWordmarkSweep 2.6s linear infinite;
  }

  .lobe-brand-loading.un0z-icon {
    transform-origin: center;
    animation: un0zIconDrift 1.65s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    will-change: transform, opacity;

    path {
      stroke: none;
      stroke-dasharray: none;
      stroke-dashoffset: 0;
      stroke-width: 0;
      animation: un0zIconTone 1.65s ease-in-out infinite;
    }
  }

  .lobe-brand-loading:not(.un0z-icon) path {
    fill: currentcolor;
    fill-opacity: 0;
    stroke: currentcolor;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    stroke-width: 0.25em;

    animation:
      draw 2s cubic-bezier(0.4, 0, 0.2, 1) infinite,
      fill 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;
