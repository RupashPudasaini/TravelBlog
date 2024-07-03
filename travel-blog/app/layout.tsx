'use client'
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
     <html>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
