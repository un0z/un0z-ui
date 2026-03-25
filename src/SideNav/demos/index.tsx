import { ActionIcon, SideNav } from '@un0z/ui';
import { Un0z } from '@un0z/ui/brand';
import { Album, MessageSquare, Settings2 } from 'lucide-react';
import { useState } from 'react';

export default () => {
  const [tab, setTab] = useState<string>('chat');

  return (
    <SideNav
      avatar={<Un0z size={40} />}
      bottomActions={<ActionIcon icon={Settings2} />}
      topActions={
        <>
          <ActionIcon
            active={tab === 'chat'}
            icon={MessageSquare}
            size="large"
            onClick={() => setTab('chat')}
          />
          <ActionIcon
            active={tab === 'market'}
            icon={Album}
            size="large"
            onClick={() => setTab('market')}
          />
        </>
      }
    />
  );
};
