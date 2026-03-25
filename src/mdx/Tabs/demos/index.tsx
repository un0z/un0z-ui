import { Typography } from '@un0z/ui';
import { Tab, Tabs } from '@un0z/ui/mdx';

export default () => (
  <Typography>
    <Tabs items={['pnpm', 'npm', 'yarn']}>
      <Tab>pnpm: Fast, disk space efficient package manager.</Tab>
      <Tab>npm is a package manager for the JavaScript programming language.</Tab>
      <Tab>Yarn is a software packaging system.</Tab>
    </Tabs>
  </Typography>
);
