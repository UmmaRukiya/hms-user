import React from 'react'
import UserLayout from '../../layouts/UserLayout'

function Department(){
    return(
        <UserLayout>

        <main>  
        {/*? Hero Start */}
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-cap hero-cap2 text-center">
                            <h2>Departments</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero End */}
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
                                {/* added */}
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="fi fi-rs-brain"></i>
                                        <h4>Nephrology </h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Surgery</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Psychiatry</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Oncology</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Gynee & OBS</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Gastroenterology</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Orthopedics</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Orthopedics</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Orthopedics</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Orthopedics</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Orthopedics</h4>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                        <i className="flaticon-cell"></i>
                                        <h4>Orthopedics</h4>
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
                                        <a href="#appointment" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
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
                                        <a href="#appointment" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
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
                                        <a href="#appointment" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
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
                                        <a href="#appointment" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
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
                                        <a href="#appointment" className="dep-btn">Appointment<i className="ti-arrow-right"></i></a>
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
        {/* department area_end  */}
         {/*? Contact form Start */}
         <div className="contact-form-main">

<section className="appointment" id='appointment'>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="appoint-title ">
                    <h1>Appointment</h1>
                    <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                    <img src="assets/img/gallery/section-img.png" alt="#"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
                <form className="form" action="#">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                                <input name="name" type="text" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                                <input name="email" type="email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                                <input name="phone" type="text" placeholder="Phone"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                                <div className="nice-select form-control wide" tabindex="0"><span className="current">Department</span>
                                    <ul className="list">
                                        <li data-value="1" className="option selected ">Department</li>
                                        <li data-value="2" className="option">Cardiac Clinic</li>
                                        <li data-value="3" className="option">Neurology</li>
                                        <li data-value="4" className="option">Dentistry</li>
                                        <li data-value="5" className="option">Gastroenterology</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                                <div className="nice-select form-control wide" tabindex="0"><span className="current">Doctor</span>
                                    <ul className="list">
                                        <li data-value="1" className="option selected ">Doctor</li>
                                        <li data-value="2" className="option">Dr. Akther Hossain</li>
                                        <li data-value="3" className="option">Dr. Dery Alex</li>
                                        <li data-value="4" className="option">Dr. Jovis Karon</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-group">
                                <input type="text" placeholder="Date" id="datepicker"/>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="form-group">
                                <textarea name="message" placeholder="Write Your Message Here....."></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-4 col-12">
                            <div className="form-group">
                                <div className="button">
                                    <button type="submit" className="btn">Book An Appointment</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-12">
                            <p>( We will be confirm by an Text Message )</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-6 col-md-12 ">
                <div className="appointment-image">
                    <img src="assets/img/gallery/contact-img.png" alt="#"/>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
{/* Contact form End */}
        </main>
        
    

        </UserLayout>

    )
}

export default Department