import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";


export default function Home() {
  return (
    <>
      <Head>
        <title>UNICORN EXITS PODCAST</title>
        <meta
          name="description"
          content="Weekend Labs is a full-service product consultancy based in Cambridge, MA"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="video-holder">
        <video src="/blobs.m4v" autoPlay muted loop></video>
      </div>
      <header className="header">
        <div class="header__brand">
          <Link href="/">
            <a>
            🦄
            </a>
          </Link>
        </div>
        <ul className="header__list">
          <li class="header__item">
            <Link href="spotify.com">
              <a><img src="/spotify.svg" class="podcast-network" /></a>
            </Link>
          </li>
          <li class="header__item">
            <Link href="apple.com">
              <a><img src="/apple.svg" class="podcast-network" /></a>
            </Link>
          </li>
          <li class="header__item">
            <Link href="google.com">
              <a><img src="/google.svg" class="podcast-network" /></a>
            </Link>
          </li>
        </ul>
      </header>
      <Layout>
        <section className="hero home col-sm-8">
          <h1>
            <span class="unicorn-exits">UNICORN EXITS</span> is a podcast about
            starting, scaling, and successfully exiting a startup.
          </h1>
        </section>

        <footer className="footer home">
          <ul className="footer__list">
            <li className="footer__item">
              <Link href="mailto:hello@weekendlabs.net">
                <a className="foorer__link"><SiInstagram></SiInstagram></a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="mailto:hello@weekendlabs.net">
                <a className="foorer__link"><SiTwitter></SiTwitter></a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="mailto:hello@weekendlabs.net">
                <a className="foorer__link"><SiTiktok></SiTiktok></a>
              </Link>
            </li>
            <li className="footer__item">
              <Link href="mailto:hello@weekendlabs.net">
                <a className="foorer__link"><HiOutlineMail></HiOutlineMail></a>
              </Link>
            </li>
          </ul>
        </footer>
      </Layout>
    </>
  );
}
