import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => (
  
  <>
 
      <Head>
        <title>Portafolio - Rodrigo</title>
        <link rel="shortcut icon" href="/imagen.ico" />
      </Head>
    <Navbar></Navbar>
    <div className="social-bar">
		<a href="https://github.com/rodrigo-espino" className="icon icon-github" target="_blank"></a>
		<a href="https://twitter.com/gerberdemenudo" className="icon icon-twitter" target="_blank"></a>
		<a href="https://www.linkedin.com/in/rodrigo-santacruz-espino-03b8a6194/" className="icon icon-linkedin" target="_blank"></a>
		<a href="mailto:rodrigo@midesc.com" className="icon icon-mail" target="_blank"></a>
		<a href="https://t.me/rodrigo_espino" className="icon icon-telegram" target="_blank"></a>
	</div>
    <main className="container py-4">
        {children}
    
    </main>

    
  </>
);
export default Layout;
