import { DefaultSeoProps } from 'next-seo';

const APP_DEFAULT_SEO: DefaultSeoProps = {
  title: 'Title A',
  titleTemplate: '%s | Next SEO',
  description: 'Description A',
  canonical: 'https://www.canonical.com/a',
  defaultOpenGraphImageHeight: 1200,
  defaultOpenGraphImageWidth: 1200,
  mobileAlternate: {
    media: 'only screen and (max-width: 640px)',
    href: 'https://m.canonical.com',
  },
  languageAlternates: [
    {
      hrefLang: 'zh-TW',
      href: 'https://www.canonical.com/zh-TW',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://www.example.com/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://www.example.com/touch-icon-ipad.jpg',
      sizes: '76x76',
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://www.example.com/touch-icon-iphone-retina.jpg',
      sizes: '120x120',
    },
    {
      rel: 'mask-icon',
      href: 'https://www.example.com/safari-pinned-tab.svg',
      color: '#193860',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
    {
      rel: 'preload',
      href: 'https://www.example.com/font/sample-font.woof2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'zh-TW',
    url: 'https://www.url.ie/a',
    title: 'Open Graph Title A',
    description: 'Open Graph Description A',
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next
    images: [
      {
        url: 'https://www.example.com/og-image-a-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt A',
        type: 'image/jpeg',
        secureUrl: 'https://www.example.com/secure-og-image-a-01.jpg',
      },
    ],
    site_name: 'SiteName A',
  },
  twitter: {
    handle: '@handlea',
    site: '@sitea',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: '1234567890',
  },
};

export default APP_DEFAULT_SEO;
