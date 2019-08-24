import React from 'react';
import CopyBlock from '@/components/CopyBlock';

const Layout: React.FC = ({ children }) => (
  <div>
    <div>{children}</div>
    <CopyBlock id={Date.now()} />
  </div>
);

export default Layout;
