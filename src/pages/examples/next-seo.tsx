import type { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import ExampleHome from '../../layouts/examples/ExampleHome';
import Header from '../../modules/examples/Header';
import Footer from '../../modules/examples/Footer';

const SEOArticle = () => (
  <div
    className="flex flex-col h-screen"
  >
    <NextSeo
      title="Article Page Title"
      description="Description of article page"
      openGraph={{
        title: 'Open Graph Article Title',
        description: 'Description of open graph article',
        url: 'https://www.example.com/articles/article-title',
        type: 'article',
        article: {
          publishedTime: '2022-04-22T23:04:13Z',
          modifiedTime: '2022-04-23T18:04:43Z',
          expirationTime: '2023-12-21T22:04:11Z',
          // Multiple Open Graph authors is only available in version `7.0.2-canary.35`+ of next
          authors: [
            'https://www.example.com/authors/@firstnameA-lastnameA',
            'https://www.example.com/authors/@firstnameB-lastnameB',
          ],
          section: 'Section II',
          // Multiple Open Graph tags is only available in version `7.0.2-canary.35`+ of next
          tags: ['Tag A', 'Tag B', 'Tag C'],
        },
        // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next
        images: [
          {
            url: 'https://www.example.com/og-image-article-title-01.jpg',
            width: 850,
            height: 650,
            alt: 'Og Image Alt Article Title A',
          },
          {
            url: 'https://www.example.com/og-image-article-title-02.jpg',
            width: 950,
            height: 850,
            alt: 'Og Image Alt Article Title B',
          },
          {
            url: 'https://www.example.com/og-image-article-title-03.jpg',
            width: 600,
            height: 400,
            alt: 'Og Image Alt Article Title C',
          },
          {
            url: 'https://www.example.com/og-image-article-title-04.jpg',
            width: 400,
            height: 400,
            alt: 'Og Image Alt Article Title D',
          },
        ],
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    <Header
      title="next-seo"
      description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."
    />
    <main
      className="mb-auto px-10"
    >
      <h1>Article Page SEO</h1>
      <p>Please view the source code.</p>
    </main>
    <Footer>
      <ol
        style={{
          listStyleType: "number"
        }}
        className="pl-6"
      >
        <li>
          GitHub:<br />
          <a
            href="https://github.com/garmeeh/next-seo"
            target="_blank"
            rel="noreferrer noopener"
            className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
          >
            https://github.com/garmeeh/next-seo
          </a>
        </li>
      </ol>
    </Footer>
  </div>
);

SEOArticle.getLayout = function getLayout(page: ReactElement) {
  return (
    <ExampleHome>
      {page}
    </ExampleHome>
  )
}

export default SEOArticle;
