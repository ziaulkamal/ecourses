// components/Layout.js
import Head from 'next/head';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Script from './FooterScripts';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Tambahkan tag Head sesuai kebutuhan */}
        <title>Your Website Title</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate-4.1.1.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/icons/style.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>

      <Header />
      <Nav />
      <div id="content">
        {children}
      </div>

      <Footer />
      <Script />
    </>
  );
};

export default Layout;
