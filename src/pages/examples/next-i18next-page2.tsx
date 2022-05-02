import Link from "next/link";
import React from 'react';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from '../../modules/examples/Header';
import Footer from '../../modules/examples/Footer';

interface IndexProps {
  name: string;
  description: string;
}

export default function LanguageSwitcherPage2() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <React.Fragment>
      <Header />
      <section style={{ textAlign: 'right', paddingRight: '20px' }}>
        <Link
          href={router.pathname}
          locale={router.locale === "en-US" ? "zh-TW" : "en-US"}
        >
          <a>Switch to <strong>{t("lang.title")}</strong></a>
        </Link>
      </section>
      <hr
        style={{ margin: '20px 0' }}
      />
      <section>
        <header style={{ textAlign: 'center' }}>Page 2</header>
        {t<string, IndexProps[]>("document.items", { returnObjects: true }).map(
          ({ name, description }, index: number) => (
            <article key={index}>
              <header>{ name }</header>
              <p>{ description }</p>
            </article>
          )
        )}
      </section>
      <hr
        style={{ margin: '20px 0' }}
      />
      <section style={{ textAlign: 'center' }}>
        Pagination:{' '}
        <Link
          href="/examples/next-i18next-page1"
        >
          <a>1</a>
        </Link>
        {', '}
        <Link
          href="/examples/next-i18next-page2"
        >
          <a>2</a>
        </Link>
      </section>
      <Footer>
        <ol style={{ listStyleType: "number" }}>
          <li>
            next-i18next:<br />
            <a
              href="https://github.com/isaachinman/next-i18next"
              target="_blank"
            >
              https://github.com/isaachinman/next-i18next
            </a>
          </li>
        </ol>
      </Footer>
    </React.Fragment>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"]))
  }
});
