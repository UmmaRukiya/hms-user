import React from 'react'
import { Link,useLocation } from 'react-router-dom'
function Header() {

    // const activeMenu=(e)=>{
    //     document.querySelectorAll('.submenu').forEach(
    //         function(e){
    //             e.classList.remove('active');
    //         }
    //     )
    //     const childElement = e.target.parentElement.querySelector('.submenu');
    //     if(childElement && childElement.classList.contains('submenu')){
    //         childElement.classList.add('active');
    //     }
    // }

	// const location = useLocation();
	// const isLinkActive = (path)=>{
    //     return location.pathname == path ? 'active' : "";
    // }
  return (

    <header>
    {/*? Header Start */}
    <div className="header-area">
        <div className="main-header header-sticky">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-xl-2 col-lg-2 col-md-1">
                        <div className="logo">
                            <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10">
                        <div className="menu-main d-flex align-items-center justify-content-end">
                            {/* Main-menu */}
                            <div className="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><Link to="/" exact className="nav-link" activeClassName="active"> Home</Link></li>
                                        <li><Link to="/about" exact className="nav-link" activeClassName="active"> About</Link></li>
                                        <li> <Link to="/doctor" className="nav-link" activeClassName="active">Doctors</Link></li>
                                        <li> <Link to="/department" className="nav-link" activeClassName="active">Department</Link>
                                            <ul className="submenu">
                                            <li><Link to="/department" className="nav-link" activeClassName="active">Medicine</Link></li>
                                                <li><a href="blog_details.html">Neuro Medicine</a></li>
                                                <li><a href="elements.html">Cardiology</a></li>
                                                <li><a href="elements.html">Gastroenterology</a></li>
                                                <li><a href="elements.html">Ent</a></li>
                                                <li><a href="elements.html">Gynee & OBS</a></li>
                                                <li><a href="elements.html">Nephrology</a></li>
                                                <li><a href="elements.html">Orthopedics</a></li>
                                                <li><a href="elements.html">Oncology</a></li>
                                                <li><a href="elements.html">Psychiatry</a></li>
                                                <li><a href="elements.html">Pediatrics</a></li>
                                                <li><a href="elements.html">Physical Medicine</a></li>
                                                <li><a href="elements.html">Surgery</a></li>
                                                <li><a href="elements.html">Urology</a></li>
                                               
                                            </ul>
                                        </li>
                                        {/* <li><a href="department.html">Department</a></li> */}
                                        <li><Link to="/blog" className="nav-link" activeClassName="active">Blog</Link>
                                            <ul className="submenu">
                                            <li><Link to="/blog" className="nav-link" activeClassName="active">Blog</Link></li>
                                                <li><a href="blog_details.html">Blog Details</a></li>
                                                <li><a href="elements.html">Element</a></li>
                                            </ul>
                                        </li>
                                        {/* <li><a href="contact.html">Contact</a></li> */}
                                        <li> <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                <a href="#" className="btn header-btn">01654.066.456</a>
                            </div>
                        </div>
                    </div>   
                    {/* Mobile Menu */}
                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Header End */}
        </header>
  )
}
export default Header