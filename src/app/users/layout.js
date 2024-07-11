/** @format */

import React from 'react';
import dynamic from 'next/dynamic';
const HeaderComponent = dynamic(() => import('@/app/components/Header/page'));
import { ToastProvider } from '@/app/contexts/ToastContext/page';
const Layout = ({ children }) => {
  // Now you can use the `pathname` variable to get the current URL path
  // console.log('Current URL path:', pathname);
  return (
    <ToastProvider>
      <div>
        <HeaderComponent />
        <div className="children">{children}</div>
      </div>
    </ToastProvider>
  );
};

export default Layout;
