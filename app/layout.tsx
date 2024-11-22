import React from 'react';
import { Metadata } from 'next';
import '../src/index.scss';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'React Book',
  description: 'Web site created with Next.js.',
};


export default function RootLayout ({ children, }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Book"/>
        <link rel="manifest" href="./manifest.json"/>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Roboto+Slab:100,400,700&display=swap"
              rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </head>
      <body>
      <div id="root">{ children }</div>

      <Script src="https://kit.fontawesome.com/9f5e6efd39.js" crossOrigin="anonymous"></Script>
      </body>
      </html>
  );
}
