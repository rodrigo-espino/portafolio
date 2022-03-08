import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => (
  
  <>
 
      <Head>
        <title>Portafolio - Rodrigo</title>
        <link rel="shortcut icon" href="/imagen.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>
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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    </main>

    
  </>
);
export default Layout;
