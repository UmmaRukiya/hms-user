import React from 'react'
import UserLayout from '../../layouts/UserLayout'

function About(){
    return(
        <UserLayout>

    <main>
    {/* Hero Start */}
    <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
            <div className="container">
                <div className="row">
                <div className="col-xl-12">
                    <div className="hero-cap hero-cap2 text-center">
                        <h2>About Us</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    {/* Hero End */}
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
                                <div className="gallery-img big-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery1.png)'}}></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery2.png)'}}></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery3.png)'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery4.png)'}}></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery5.png)'}}></div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-gallery mb-30">
                                <div className="gallery-img big-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery6.png)'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Gallery Area End */}
    
    {/*? gallery Products Start */}
    <div className="gallery-area fix">
        <div className="container-fluid p-0">
            <div className="row no-gutters">
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery1.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery2.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery3.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery4.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                             <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery5.png)'}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="gallery-box">
                        <div className="single-gallery">
                            <div className="gallery-img " style={{ backgroundImage: 'url(assets/img/gallery/gallery6.png)'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* gallery Products End */}
   
    </main>
        
    

        </UserLayout>

    )
}

export default About