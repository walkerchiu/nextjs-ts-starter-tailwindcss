import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IndexProps {
  name: string;
  description: string;
}

export default function LanguageSwitcherPage2() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <section style={{ textAlign: 'right' }}>
        <Link
          href={router.pathname}
          locale={router.locale === "en-US" ? "zh-TW" : "en-US"}
        >
          <a>Switch to <strong>{t("lang.title")}</strong></a>
        </Link>
      </section>
      <hr/>
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
      <hr/>
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
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"]))
  }
});
