import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js Starter</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Don't take too long to get started!"
        />
      </Head>

      <div className="container">
        <div>seven visual</div>
      </div>
    </>
  );
};

export default Index;
