import React from "react";


const Footer = () => {
	return (
		<>
			<section className="py-0 pt-7" id="contact">
				<div className="container">
					<div className="row">
						<div className="col-6 col-sm-4 col-xl-3 mb-3">
							<h4 className="lh-lg fw-bold text-light">WATCH</h4>
						</div>
						<div className="col-6 col-sm-4 col-xl-3 mb-3">
							<h5 className="lh-lg fw-bold text-light">MENU</h5>
							<ul className="list-unstyled mb-md-4 mb-lg-0">
								<li className="lh-lg">
									<a
										className="text-800 text-decoration-none text-uppercase fw-bold"
										href="#!"
										>Shipping Info</a
									>
								</li>
								<li className="lh-lg">
									<a
										className="text-800 text-decoration-none text-uppercase fw-bold"
										href="#!"
										>Refunds</a
									>
								</li>
								<li className="lh-lg">
									<a
										className="text-800 text-decoration-none text-uppercase fw-bold"
										href="#!"
										>How to Order</a
									>
								</li>
								<li className="lh-lg">
									<a
										className="text-800 text-decoration-none text-uppercase fw-bold"
										href="#!"
										>How to Track</a
									>
								</li>
								<li className="lh-lg">
									<a
										className="text-800 text-decoration-none text-uppercase fw-bold"
										href="#!"
										>Size Guides</a
									>
								</li>
							</ul>
						</div>
						<div className="col-6 col-sm-4 col-xl-3 mb-3">
							<h5 className="mb-5"></h5>
							<ul className="list-unstyled mb-md-4 mb-lg-0">
								<li className="lh-lg">
									<a
										className="text-800 text-decoration-none text-uppercase fw-bold"
										href="#!"
										>Contact Us</a
									>
								</li>
								<li className="lh-lg">
									<a
										className="text-800 text-decoration-none text-uppercase fw-bold"
										href="#!"
										>my account</a
									>
								</li>
							</ul>
						</div>
						<div className="col-12 col-xl-3">
							<h5 className="lh-lg fw-bold text-light text-uppercase">
								Signup For our Latest News
							</h5>
							<div className="row input-group-icon mb-5">
								<div className="col-12">
									<form
										className="row row-cols-lg-auto g-0 align-items-center"
									>
										<div className="col-8 col-lg-9">
											<label
												className="visually-hidden"
												htmlFor="colFormLabel"
												>Username</label
											>
											<div className="input-group">
												<input
													className="rounded-end-0 form-control"
													id="colFormLabel"
													type="email"
													placeholder="email address"
												/>
											</div>
										</div>
										<div className="col-4 col-lg-3">
											<button
												className="btn btn-primary rounded-start-0"
												type="submit"
											>
												Submit
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="border-bottom border-700"></div>
					<div className="row flex-center my-3">
						<div className="col-md-6 order-1 order-md-0">
							<p className="my-2 text-800 text-center text-md-start">
								Made by <a
									className="text-500"
									href="#"
									target="_blank"
									> ADSE Students. Akowonjo Center.
								</a>
							</p>
						</div>
						<div className="col-md-6">
							<div className="text-center text-md-end">
								<a href="#!">
									<span className="me-4" data-feather="facebook"></span>
								</a>
								<a href="#!">
									<span className="me-4" data-feather="instagram"></span>
								</a>
								<a href="#!">
									<span className="me-4" data-feather="youtube"></span>
								</a>
								<a href="#!">
									<span className="me-4" data-feather="twitter"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Footer;
