/** @format */

// sitemap.js

import fs from 'fs';
import { fetchAllProductIds, fetchProduct } from '@/app/Server/userApi';

const BASE_URL = 'http://localhost:3000/'; // Update with your actual website URL

const generateSitemap = async (req, res) => {
  try {
    const productIds = await fetchAllProductIds(); // Fetch all product IDs

    console.log('productIds ----------->>>>>>>>>>', productIds);
    // if (!Array.isArray(productIds))
    //   throw new Error('Expected products to be an array');

    const productUrls = productIds.data.map(
      (item) => `${BASE_URL}/product/${item._id}`,
    );
    console.log('productUrls ------>>>>>>', productUrls);
    const staticRoutes = [
      `${BASE_URL}/`,
      `${BASE_URL}/aboutus`,
      `${BASE_URL}/contact`,
    ]; // Static URLs
    const allUrls = [...staticRoutes, ...productUrls]; // Combine all URLs
    console.log(staticRoutes);

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allUrls
          .map(
            (url) => `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `,
          )
          .join('')}
      </urlset>`;

    fs.writeFileSync('public/sitemap.xml', sitemapContent);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

export default generateSitemap;
