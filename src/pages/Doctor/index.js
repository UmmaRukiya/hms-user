import React from 'react'
import UserLayout from '../../layouts/UserLayout'

function Doctor(){
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
                                <h2>Doctors</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero End */}
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
                </div>
            </div>
        </div>
        {/* Team End */}
        </main>
        
    

        </UserLayout>

    )
}

export default Doctor