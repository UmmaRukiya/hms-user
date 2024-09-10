import * as React from 'react';
function App() {
  return (
   <>
   



    {/* ? Preloader Start */}
    {/* <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src="assets/img/logo/loder.png" alt=""/>
                </div>
            </div>
        </div>
    </div> */}
    {/* Preloader Start */}
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
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="doctor.html">Doctors</a></li>
                                        <li><a href="department.html">Department</a></li>
                                        <li><a href="blog.html">Blog</a>
                                            <ul className="submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog_details.html">Blog Details</a></li>
                                                <li><a href="elements.html">Element</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
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
<main>
    {/*? slider Area Start*/}
    <div className="slider-area position-relative">
        <div className="slider-active">
            {/* Single Slider */}
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                            <div className="hero__caption">
                                <span>Committed to success</span>
                                <h1 className="cd-headline letters scale">We care about your 
                                    <strong className="cd-words-wrapper">
                                        <b className="is-visible">health</b>
                                        <b>sushi</b>
                                        <b>steak</b>
                                    </strong>
                                </h1>
                                <p data-animation="fadeInLeft" data-delay="0.1s">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uquip ex ea commodo consequat is aute irure.</p>
                                <a href="#" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.5s">Appointment <i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
            {/* Single Slider */}
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                            <div className="hero__caption">
                                <span>Committed to success</span>
                                <h1 className="cd-headline letters scale">We care about your 
                                    <strong className="cd-words-wrapper">
                                        <b className="is-visible">health</b>
                                        <b>sushi</b>
                                        <b>steak</b>
                                    </strong>
                                </h1>
                                <p data-animation="fadeInLeft" data-delay="0.1s">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uquip ex ea commodo consequat is aute irure.</p>
                                <a href="#" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.5s">Appointment <i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    </div>
    {/* slider Area End*/}
    {/*? About Start*/}
    <div className="about-area section-padding2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-10">
                    <div className="about-caption mb-50">
                        {/* Section Tittle */}
                        <div className="section-tittle section-tittle2 mb-35">
                            <span>About Our Company</span>
                            <h2>Welcome To Our Hospital</h2>
                        </div>
                        <p>There arge many variations ohf pacgssages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                        <div className="about-btn1 mb-30">
                            <a href="about.html" className="btn about-btn">Find Doctors .<i className="ti-arrow-right"></i></a>
                        </div>
                        <div className="about-btn1 mb-30">
                            <a href="about.html" className="btn about-btn2">Appointment <i className="ti-arrow-right"></i></a>
                        </div>
                        <div className="about-btn1 mb-30">
                            <a href="about.html" className="btn about-btn2">Emargency 1 <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    {/* about-img */}
                    <div className="about-img ">
                        <div className="about-font-img d-none d-lg-block">
                            <img src="assets/img/gallery/about2.png" alt=""/>
                        </div>
                        <div className="about-back-img ">
                            <img src="assets/img/gallery/about1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About  End*/}
    {/*? department_area_start  */}
    <div className="department_area section-padding2">
        <div className="container">
            {/* Section Tittle */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-tittle text-center mb-100">
                        <span>Our Departments</span>
                        <h2>Our Medical Services</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="depart_ment_tab mb-30">
                        {/* Tabs Buttons */}
                        <ul className="nav" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    <i className="flaticon-teeth"></i>
                                    <h4>Dentistry</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                    <i className="flaticon-cardiovascular"></i>
                                    <h4>Cardiology</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                    <i className="flaticon-ear"></i>
                                    <h4>ENT Specialists</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="Astrology-tab" data-toggle="tab" href="#Astrology" role="tab" aria-controls="contact" aria-selected="false">
                                    <i className="flaticon-bone"></i>
                                    <h4>Astrology</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="Neuroanatomy-tab" data-toggle="tab" href="#Neuroanatomy" role="tab" aria-controls="contact" aria-selected="false">
                                    <i className="flaticon-lung"></i>
                                    <h4>Neuroanatomy</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                    <i className="flaticon-cell"></i>
                                    <h4>Blood Screening</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dept_main_info white-bg">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        {/* single_content  */}
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                    <img src="assets/img/gallery/department_man.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* single_content  */}
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        {/* single_content  */}
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                    <img src="assets/img/gallery/department_man.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* single_content  */}
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        {/* single_content  */}
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                    <img src="assets/img/gallery/department_man.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* single_content  */}
                    </div>
                    <div className="tab-pane fade" id="Astrology" role="tabpanel" aria-labelledby="Astrology-tab">
                        {/* single_content  */}
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                    <img src="assets/img/gallery/department_man.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* single_content  */}
                    </div>
                    <div className="tab-pane fade" id="Neuroanatomy" role="tabpanel" aria-labelledby="Neuroanatomy-tab">
                        {/* single_content  */}
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                    <img src="assets/img/gallery/department_man.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* single_content  */}
                    </div>
                    <div className="tab-pane fade" id="Blood" role="tabpanel" aria-labelledby="Blood-tab">
                        {/* single_content  */}
                        <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                    <h3>Dentist with surgical mask holding <br/> scaler near patient</h3 >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                    <img src="assets/img/gallery/department_man.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* single_content  */}
                    </div>
                    </div>
            </div>

        </div>
    </div>
    {/* depertment area end  */}
     {/*? Gallery Area Start */}
     <div className="gallery-area section-padding30">
        <div className="container">
            {/* Section Tittle */}
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-tittle text-center mb-100">
                        <span>Our Gellary</span>
                        <h2>Our Medical Camp</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* Left */}
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img big-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery1.png)' }}></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img small-img" style={{backgroundImage: 'url(assets/img/gallery/gallery2.png)'}}></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img small-img" style={{backgroundImage: 'url(assets/img/gallery/gallery3.png)'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img small-img" style={{backgroundImage: 'url(assets/img/gallery/gallery4.png)'}}></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img small-img" style={{backgroundImage: 'url(assets/img/gallery/gallery5.png)'}}></div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img big-img" style={{backgroundImage: 'url(assets/img/gallery/gallery6.png)'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Gallery Area End */}
    {/*? All startups Start */}
    <div className="all-starups-area testimonial-area fix">
        {/* left Contents */}
        <div className="starups">
            {/*? Testimonial Start */}
            <div className="h1-testimonial-active">
                {/* Single Testimonial */}
                <div className="single-testimonial text-center">
                    {/* Testimonial Content */}
                    <div className="testimonial-caption ">
                        <div className="testimonial-top-cap">
                            <img src="assets/img/gallery/testimonial.png" alt=""/>
                            <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for yout hard.”</p>
                        </div>
                        {/* founder */}
                        <div className="testimonial-founder d-flex align-items-center justify-content-center">
                            <div className="founder-img">
                                <img src="assets/img/gallery/Homepage_testi.png" alt=""/>
                            </div>
                            <div className="founder-text">
                                <span>Margaret Lawson</span>
                                <p>Chif Photographer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}
        </div>
        {/*Right Contents  */}
        <div className="starups-img"></div>
    </div>
    {/*All startups End */}
     {/*? Team Start */}
     <div className="team-area section-padding30">
        <div className="container">
            {/* Section Tittle */}
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-tittle text-center mb-100">
                        <span>Our Doctors</span>
                        <h2>Our Specialist</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* single Tem */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-30">
                        <div className="team-img">
                            <img src="assets/img/gallery/team2.png" alt=""/>
                        </div>
                        <div className="team-caption">
                            <h3><a href="#">Alvin Maxwell</a></h3>
                            <span>Creative UI Designer</span>
                            {/* Team social */}
                            <div className="team-social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fas fa-globe"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-30">
                        <div className="team-img">
                            <img src="assets/img/gallery/team3.png" alt=""/>
                        </div>
                        <div className="team-caption">
                            <h3><a href="#">Maria Smith</a></h3>
                            <span>Agency Manager</span>
                            {/* Team social */}
                            <div className="team-social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fas fa-globe"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div className="single-team mb-30">
                        <div className="team-img">
                            <img src="assets/img/gallery/team1.png" alt=""/>
                        </div>
                        <div className="team-caption">
                            <h3><a href="#">Angela Doe</a></h3>
                            <span>Designer</span>
                            {/* Team social */}
                            <div className="team-social">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fas fa-globe"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Team End */}
     {/*? Contact form Start */}
     <div className="contact-form-main">
        <div className="container">
            <div className="row justify-content-end">
                <div className="col-xl-7 col-lg-7">
                    <div className="form-wrapper">
                        {/*Section Tittle  */}
                        <div className="form-tittle">
                            <div className="row ">
                                <div className="col-xl-12">
                                    <div className="section-tittle section-tittle2">
                                        <span>Appointment Apply Form</span>
                                        <h2>Appointment Form</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Section Tittle  */}
                        <form id="contact-form" action="#" method="POST">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-box user-icon mb-30">
                                        <input type="text" name="name" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-box email-icon mb-30">
                                        <input type="text" name="email" placeholder="Phone"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                    <div className="select-itms">
                                        <select name="select" id="select2">
                                            <option value="">Health Law</option>
                                            <option value="">saiful islam</option>
                                            <option value="">Arafath Miya</option>
                                            <option value="">Shakil Miya</option>
                                            <option value="">Tamim Sharker</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-box subject-icon mb-30">
                                        <input type="Email" name="subject" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-box message-icon mb-65">
                                        <textarea name="message" id="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="submit-info">
                                        <button className="btn" type="submit">Submit Now <i className="ti-arrow-right"></i> </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* contact left Img*/}
        <div className="from-left d-none d-lg-block">
            <img src="assets/img/gallery/contact_form.png" alt=""/>
        </div>
    </div>
    {/* Contact form End */}
    {/*? gallery Products Start */}
    <div className="gallery-area fix">
        <div className="container-fluid p-0">
            <div className="row no-gutters">
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery1.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery2.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery3.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery4.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                             <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery5.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery6.png)'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* gallery Products End */}
    {/*? Blog start */}
    <div className="home_blog-area section-padding30">
        <div className="container">
            <div className="row justify-content-sm-center">
                <div className="cl-xl-7 col-lg-8 col-md-10">
                    {/* Section Tittle */}
                    <div className="section-tittle text-center mb-70">
                        <span>Oure recent news</span>
                        <h2>OurNews From Blog</h2>
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-blogs mb-30">
                        <div className="blog-img">
                            <img src="assets/img/gallery/blog1.png" alt=""/>
                        </div>
                        <div className="blogs-cap">
                            <div className="date-info">
                                <span>Health</span>
                                <p>Nov 30, 2020</p>
                            </div>
                            <h4><a href="blog_details.html">Amazing Places To Visit In Summer</a></h4>
                            <a href="blog_details.html" className="read-more1">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-blogs mb-30">
                        <div className="blog-img">
                            <img src="assets/img/gallery/blog2.png" alt=""/>
                        </div>
                        <div className="blogs-cap">
                            <div className="date-info">
                                <span>Checkup</span>
                                <p>Nov 30, 2020</p>
                            </div>
                            <h4><a href="blog_details.html">Developing Creativithout Losing Visual</a></h4>
                            <a href="blog_details.html" className="read-more1">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-blogs mb-30">
                        <div className="blog-img">
                            <img src="assets/img/gallery/blog3.png" alt=""/>
                        </div>
                        <div className="blogs-cap">
                            <div className="date-info">
                                <span>Operation</span>
                                <p>Nov 30, 2020</p>
                            </div>
                            <h4><a href="blog_details.html">Winter Photography Tips from Glenn</a></h4>
                            <a href="blog_details.html" className="read-more1">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Blog End */}
    </main>
    <footer>
        {/*? Footer Start*/}
        <div className="footer-area section-bg" data-background="assets/img/gallery/footer_bg.jpg">
            <div className="container">
                <div className="footer-top footer-padding">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8">
                            <div className="single-footer-caption mb-50">
                                {/* logo */}
                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>About Us</h4>
                                    <div className="footer-pera">
                                        <p className="info1">Lorem igpsum doldfor sit amet, adipiscing elit, sed do eiusmod tempor cergelit rgh. </p>
                                        <p className="info1">Lorem ipsum dolor sit amet, adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-number mb-50">
                                    <h4><span>+564 </span>7885 3222</h4>
                                    <p>youremail@gmail.com</p>
                                </div>
                                {/* Form */}
                                <div className="footer-form">
                                    <div id="mc_embed_signup">
                                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" className="subscribe_form relative mail_part" noValidate={true}>
                                            <input type="email" name="EMAIL" id="newsletter-form-email" placeholder=" Email Address " className="placeholder hide-on-focus" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your email address'"/>
                                            <div className="form-icon">
                                                <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                                                    Send
                                                </button>
                                            </div>
                                            <div className="mt-10 info"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-xl-9 col-lg-8">
                            <div className="footer-copy-right">
                                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            {/* Footer Social */}
                            <div className="footer-social f-right">
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fas fa-globe"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer End*/}
    </footer>
    {/* Scroll Up */}
    <div id="back-top" >
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
    </div>

    
    
  


   </>
  );
}

export default App;
