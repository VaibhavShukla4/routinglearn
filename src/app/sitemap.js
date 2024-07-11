/** @format */

// sitemap.js

import fs from 'fs';
import { fetchAllProductIds, fetchProduct } from '@/app/Server/userApi';

const BASE_URL = 'http://localhost:3000'; // Update with your actual website URL

const Page = async (req, res) => {
  try {
    const productIds = await fetchAllProductIds();

    if (!productIds || !productIds.data || !Array.isArray(productIds.data)) {
      throw new Error(
        'Failed to fetch product IDs or data format is incorrect.',
      );
    }

    const productUrls = productIds.data.map(
      (item) => `${BASE_URL}/product/${item._id}`,
    );

    const staticRoutes = [
      `${BASE_URL}/`,
      `${BASE_URL}/aboutus`,
      `${BASE_URL}/contact`,
    ];

    const allUrls = [...staticRoutes, ...productUrls];

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

    fs.writeFileSync('public/sitemap.xml', sitemapContent.trim());
    console.log('Sitemap generated successfully!');
    res?.status(200).send('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error); // Log the specific error
    res?.status(500).send('Error generating sitemap'); // Respond with an error status
  }
};

export default Page;
