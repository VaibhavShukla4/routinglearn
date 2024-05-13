/** @format */

import React from 'react';
import Header from '@/app/components/Header/page';
const Layout = ({ children }) => {
  // Now you can use the `pathname` variable to get the current URL path
  // console.log('Current URL path:', pathname);
  return (
    <div>
      <Header />
      <div className="children">{children}</div>
    </div>
  );
};

export default Layout;
