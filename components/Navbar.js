import Link from "next/link";
const Navbar = () => (
  <header>
      
 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/en">Portfolio</a>
            <button 
            	className="navbar-toggler" 
            	type="button" 
            	data-bs-toggle="collapse" 
            	data-bs-target="#toggleMobileMenu" 
            	aria-controls="toggleMobileMenu" 
            	aria-expanded="false" 
            	aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="toggleMobileMenu">
            
                <ul className="navbar-nav ms-auto text-center">
                    <li>
                        <a className="nav-link" href="/en">EN</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/">ES</a>
                    </li>
                    
                </ul>
                

            </div>
        </nav>
      
  </header>
);

export default Navbar;
