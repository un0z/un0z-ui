import { ConfigProvider } from '@un0z/ui';
import { Un0z } from '@un0z/ui/brand';
import { motion } from 'motion/react';

export default () => {
  return (
    <ConfigProvider config={{ proxy: 'unpkg' }} motion={motion}>
      <Un0z />
    </ConfigProvider>
  );
};
