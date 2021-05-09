import Head from "next/head";
import styles from '../styles/Layout.module.css'
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Head>
              <div
              className={styles.container}
              >{children}</div>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Coding Events | Feel The Competition",
  description: "Find the latest Coding and Programming Events",
  keywords: "Coding,Programming,Code-e-thon",
};
