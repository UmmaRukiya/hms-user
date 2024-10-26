import React from 'react'
import UserLayout from '../../layouts/UserLayout'
import { Link } from "react-router-dom";
function Appointment(){
    return(
        <UserLayout>

		<div className='row col-5 d-flex justify-content-end'>
			<div className="text-center mb-12 ">
				<img src="log.png" height="48" className='mb-4'/>
				<h3>Sign Up</h3>
				<p>Please fill the form to register.</p>
			</div>
			<form >
				<div className="row">
					<div className="col-md-12 col-12">
						<div className="form-group">
							<label htmlFor="first-name">Full Name</label>
							<input type="text" id="first-name" className="form-control"  name="name"/>
						</div>
					</div>
					<div className="col-md-12 col-12">
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" className="form-control"  name="email"/>
						</div>
					</div>
					<div className="col-md-12 col-12">
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="text" id="password" className="form-control" name="password"/>
						</div>
					</div>
					<div className="col-md-12 col-12">
						<div className="form-group">
							<label htmlFor="password">Confirm Password</label>
							<input type="text" id="password" className="form-control"  name="c_password"/>
						</div>
					</div>
				
				</div>
					{/* <Link to="/login">Have an account? Login</Link>       */}
				<div className="clearfix">
					<button className="btn btn-primary float-right">Submit</button>
				</div>
			</form>

		</div>
       












        {/*? Contact form Start */}
        {/* <div className="contact-form-main">

        <section className="appointment" id='appointment'>
			<div className="container">
				
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
				
				</div>
			</div>
		</section>


           
        </div> */}
       

        </UserLayout>

    )
}

export default Appointment