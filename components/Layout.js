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
		<a href="https://twitter.com/rodrigo_se_mx" className="icon icon-twitter" target="_blank"></a>
		<a href="https://www.linkedin.com/in/rodrigo-se-mx" className="icon icon-linkedin" target="_blank"></a>
		<a href="mailto:rodrigo_se_con@outlook.com" className="icon icon-mail" target="_blank"></a>
		<a href="https://t.me/rodrigo_espino" className="icon icon-telegram" target="_blank"></a>
	</div>
    <main className="container py-4">
        {children}
    
    </main>

    
  </>
);
export default Layout;
