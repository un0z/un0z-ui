import { Footer, type FooterProps } from '@un0z/ui';

const columns: FooterProps['columns'] = [
  {
    items: [
      {
        description: 'AIGC Components',
        openExternal: true,
        title: 'Un0z UI',
        url: 'https://github.com/un0z/un0z-ui',
      },
      {
        description: 'Chatbot Client',
        openExternal: true,
        title: 'Un0z Chat',
        url: 'https://github.com/un0z/un0z-core/tree/main/src',
      },
    ],
    title: 'Resources',
  },
  {
    items: [
      {
        description: 'Vega AI',
        openExternal: true,
        title: 'Vega AI',
        url: 'https://github.com/un0z/vega-ai',
      },
    ],
    title: 'More Products',
  },
];

export default () => {
  return <Footer bottom="Copyright © 2026 Un0z" columns={columns} />;
};
