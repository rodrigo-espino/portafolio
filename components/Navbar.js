import Link from "next/link";
const Navbar = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        
          <a className="navbar-brand">Portfolio</a>
        
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <ul className= "navbar-nav ml-auto">
              <li className="nav-item active">
                <Link href="en">
                <a className="nav-link" >EN</a>
                </Link>
              </li>
              <li className="nav-item active">
                <Link href="/">
                <a className="nav-link " >ES</a>
                </Link>
              </li>

            </ul>
          
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
