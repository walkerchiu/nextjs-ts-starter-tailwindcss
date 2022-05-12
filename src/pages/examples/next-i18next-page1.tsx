import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from '../../modules/examples/Header';
import Footer from '../../modules/examples/Footer';

interface IndexProps {
  name: string;
  description: string;
}

export default function LanguageSwitcherPage1() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div
      className="flex flex-col h-screen"
    >
      <Header />
      <main
        className="mb-auto px-10"
      >
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
          <header style={{ textAlign: 'center' }}>Page 1</header>
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
      </main>
      <Footer>
        <ol
          style={{ listStyleType: "number" }}
        >
          <li>
            next-i18next:<br />
            <a
              href="https://github.com/isaachinman/next-i18next"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://github.com/isaachinman/next-i18next
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
}

export const getStaticProps = async ({ locale }: {locale: string}) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"]))
  }
});
