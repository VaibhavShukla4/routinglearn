/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // images: {
  //   domains: ['fakestoreapi.com'],
  // },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/users/home',
      },
      {
        source: '/aboutus',
        destination: '/users/aboutus',
      },
      {
        source: '/contact',
        destination: '/users/contact',
      },
      {
        source: '/addproduct', // Corrected the syntax here
        destination: '/users/addproduct', // Corrected the syntax here
      },
      {
        source: '/profile/:id',
        destination: '/users/profile/:id',
      },
      {
        source: '/product/:id',
        destination: '/users/product/:id',
      },
    ];
  },
};

export default nextConfig;
