/** @format */

// pages/api/products/[id].js
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Product } from '@/lib/Model/product'; // Make sure this path is correctly pointing to your Product model

export async function GET(req) {
  // Use next/router or similar on the client-side to push to this API with the ID as a URL parameter
  try {
    // Extract the product ID directly from the path, not from searchParams
    const productId = req.nextUrl.pathname.split('/').pop(); // This assumes your URL is like /api/products/{id}
    console.log('Product ID:', productId);

    if (!productId) {
      console.log('Product ID is missing');
      return new NextResponse(
        JSON.stringify({ error: 'Product ID is required' }),
        { status: 400 },
      );
    }

    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI);
    }

    const product = await Product.findById(productId);
    if (!product) {
      return new NextResponse(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ data: product }), { status: 200 });
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Internal server error',
        details: error.message,
      }),
      { status: 500 },
    );
  }
}
