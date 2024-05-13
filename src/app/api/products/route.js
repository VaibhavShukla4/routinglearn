/** @format */

// src/app/api/products/route.js
import { NextResponse } from 'next/server';
import { connectionStart } from '@/lib/db';
import mongoose from 'mongoose';
import { Product } from '@/lib/Model/product';
import generateSitemap from '@/app/sitemap';
export async function GET(req) {
  try {
    // const client = await connectionStart;
    // const db = client.db('dynamic-sitemap');
    // const products = await db.collection('products').find({}).toArray();
    await mongoose.connect(connectionStart);
    const data = await Product.find();

    // console.log('Products ------------>>>>>>>>>>>', data);
    // return new NextResponse(JSON.stringify(products), { status: 200 });
    return NextResponse.json({ data, result: true, status: 200 });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    // const client = await connectionStart;
    // const db = client.db('dynamic-sitemap');
    // const productData = await req.json(); // Assuming the body data is in JSON format
    // const response = await db.collection('products').insertOne(productData);
    const request = await req.json();
    // console.log('Request --------->>>>>>>>>>>', request);
    await mongoose.connect(connectionStart);
    // let product = new Product({
    //   name: 'Hero',
    //   price: '1000',
    // });
    let product = new Product(request);
    const result = await product.save();
    await generateSitemap();
    return NextResponse.json({ result, success: true, status: 201 }); // Return the newly created product
  } catch (error) {
    console.error('Failed to add product:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to process request' }),
      { status: 400 },
    );
  }
}
