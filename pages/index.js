import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../components/layout";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiYoutube } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>UNICORN EXITS PODCAST</title>
        <meta
          name="description"
          content="Unicorn Exits is a podcast about starting, scaling, and successfully exiting a startup."
        />
        <link rel="icon" href="/favicon.ico" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8NSY41NMLH"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8NSY41NMLH');
          `}
        </Script>
      </Head>
      <div className="video-holder">
        <video src="/blobs.m4v" autoPlay muted loop></video>
      </div>
      <header className="header">
        <div class="header__brand">
          <Link href="/">
            <a>🦄</a>
          </Link>
        </div>
        <ul className="header__list">
          <li class="header__item">
            <Link href="/spotify">
              <a target="_blank" rel="nofollow">
                <img src="/spotify.svg" class="podcast-network" />
              </a>
            </Link>
          </li>
          <li class="header__item">
            <Link href="/apple">
              <a target="_blank" rel="nofollow">
                <img src="/apple.svg" class="podcast-network" />
              </a>
            </Link>
          </li>
          <li class="header__item">
            <Link href="/google">
              <a target="_blank" rel="nofollow">
                <img src="/google.svg" class="podcast-network" />
              </a>
            </Link>
          </li>
        </ul>
      </header>
      <Layout>
        <section className="hero col-sm-8">
          <h1>
            <span class="unicorn-exits">UNICORN EXITS</span> is a podcast about
            starting, scaling, and successfully exiting a startup.
          </h1>
        </section>

        <footer className="footer home">
          <ul className="footer__list">
            <li className="footer__item">
              <Link href="https://youtube.com/unicornexits">
                <a className="footer__link" target="_blank" rel="nofollow">
                  <SiYoutube></SiYoutube>
                </a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="https://instagram.com/unicornexits">
                <a className="footer__link" target="_blank" rel="nofollow">
                  <SiInstagram></SiInstagram>
                </a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="https://twitter.com/unicornexits">
                <a className="footer__link" target="_blank" rel="nofollow">
                  <SiTwitter></SiTwitter>
                </a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="https://tiktok.com/unicornexits">
                <a className="footer__link" target="_blank" rel="nofollow">
                  <SiTiktok></SiTiktok>
                </a>
              </Link>
            </li>
          </ul>
        </footer>
      </Layout>
    </>
  );
}
