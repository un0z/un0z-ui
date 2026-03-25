'use client';

import { Un0z } from '@un0z/ui/brand';
import { Link } from 'dumi';
import { memo } from 'react';

const Logo = memo(() => {
  return (
    <Link
      style={{
        alignItems: 'center',
        color: 'inherit',
        display: 'inline-flex',
        textDecoration: 'none',
      }}
      to={'/'}
    >
      <Un0z size={28} type={'combine'} />
    </Link>
  );
});

Logo.displayName = 'Logo';

export default Logo;
