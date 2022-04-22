import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface IndexProps {
  name: string;
  description: string;
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <Link
        href={router.pathname}
        locale={router.locale === "en-US" ? "zh-TW" : "en-US"}
        passHref
      >
        <a>Switch to {t("lang.title")}</a>
      </Link>
      <hr/>
      <section>
        {t<string, IndexProps[]>("document.items", { returnObjects: true }).map(
          ({ name, description }, index: number) => (
            <article key={index}>
              <header>{ name }</header>
              <p>{ description }</p>
            </article>
          )
        )}
      </section>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"]))
  }
});
