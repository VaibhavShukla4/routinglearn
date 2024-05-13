/** @format */

import Link from 'next/link';
import React from 'react';
import './index.css';
const page = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users/about">About</Link>
        </li>
        <li>
          <Link href="/users/contact">Contact</Link>
        </li>
        <li>
          <Link href="/users/addproduct">Add</Link>
        </li>
        <li>
          <Link href="/users/profile/1">Profile</Link>
        </li>
        <li>
          <Link href="/users/product/:id">Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
