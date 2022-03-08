import Link from "next/link";
const Navbar = () => (
  <header>
      
 
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="/en">Portfolio</a>
            <button 
            	class="navbar-toggler" 
            	type="button" 
            	data-bs-toggle="collapse" 
            	data-bs-target="#toggleMobileMenu" 
            	aria-controls="toggleMobileMenu" 
            	aria-expanded="false" 
            	aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="toggleMobileMenu">
            
                <ul class="navbar-nav ms-auto text-center">
                    <li>
                        <a class="nav-link" href="/en">EN</a>
                    </li>
                    <li>
                        <a class="nav-link" href="/">ES</a>
                    </li>
                    
                </ul>
                

            </div>
        </nav>
      
  </header>
);

export default Navbar;
