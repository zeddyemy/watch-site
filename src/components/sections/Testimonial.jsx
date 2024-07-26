import React from 'react'
import ade from "../../assets/img/gallery/ade.png";
import joy from "../../assets/img/gallery/joy.png";
import eno from "../../assets/img/gallery/eno.png";
import smith from "../../assets/img/gallery/smith.png"
import sandra from "../../assets/img/gallery/sandra-williams.png";

const Testimonial = () => {
    return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center my-5">
						<h5 className="fs-3 fs-lg-5 lh-sm mb-0 text-uppercase">
							what customers are saying
						</h5>
					</div>
				</div>
				<div className="row flex-center h-100">
					<div className="col-xl-9">
						<div
							className="carousel slide"
							id="carouselTestimonials"
							data-bs-ride="carousel"
						>
							<div className="carousel-inner">
								<div
									className="carousel-item active"
									data-bs-interval="10000"
								>
									<div className="row h-100 justify-content-center">
										<div className="col-md-6 mb-4">
											<div className="card h-100 shadow card-span p-3 bg-black">
												<div className="card-body">
													<div className="d-flex align-items-center">
														<img
															className="img-fluid"
															src={ade}
															width="80"
															alt="testimonials"
														/>
														<div className="flex-1 ms-4">
															<h6 className="fs-lg-1 mb-1 text-uppercase">
																Ade Damola
															</h6>
														</div>
													</div>
													<p className="mb-0 mt-4 fw-light lh-lg">
														Found the perfect
														timepiece! Amazing
														selection and seamless
														checkout. Highly
														recommend! Obsessed with
														my new watch! Great
														customer service and
														fast shipping.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-6 mb-4">
											<div className="card h-100 shadow card-span p-3 bg-black">
												<div className="card-body">
													<div className="d-flex align-items-center">
														<img
															className="img-fluid"
															src={joy}
															width="80"
															alt="testimonials"
														/>
														<div className="flex-1 ms-4">
															<h6 className="fs-lg-1 mb-1 text-uppercase">
																Joy Chukwuemeke
															</h6>
														</div>
													</div>
													<p className="mb-0 mt-4 fw-light lh-lg">
														I was blown away by the
														variety of watches on
														this website. The
														filters made it easy to
														find the perfect style.
														The watch arrived
														beautifully packaged and
														exceeded my
														expectations.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="carousel-item"
									data-bs-interval="5000"
								>
									<div className="row h-100 justify-content-center">
										<div className="col-md-6 mb-4">
											<div className="card h-100 shadow card-span p-3 bg-black">
												<div className="card-body">
													<div className="d-flex align-items-center">
														<img
															className="img-fluid"
															src={eno}
															width="80"
															alt="testimonials"
														/>
														<div className="flex-1 ms-4">
															<h6 className="fs-lg-1 mb-1 text-uppercase">
																Eno Bassey
															</h6>
														</div>
													</div>
													<p className="mb-0 mt-4 fw-light lh-lg">
														The customer service was
														exceptional! They helped
														me choose the right
														watch and answered all
														my questions patiently.
														The watch itself is
														stunning and has become
														my new favorite
														accessory.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-6 mb-4">
											<div className="card h-100 shadow card-span p-3 bg-black">
												<div className="card-body">
													<div className="d-flex align-items-center">
														<img
															className="img-fluid"
															src={sandra}
															width="80"
															alt="testimonials"
														/>
														<div className="flex-1 ms-4">
															<h6 className="fs-lg-1 mb-1 text-uppercase">
																Ainara Vergara
															</h6>
														</div>
													</div>
													<p className="mb-0 mt-4 fw-light lh-lg">
														I've been searching for
														a specific watch for
														months and finally found
														it here. The website is
														user-friendly, and the
														shipping was incredibly
														fast. I'm thrilled with
														my purchase!
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="row h-100 justify-content-center">
										<div className="col-md-6 mb-4">
											<div className="card h-100 shadow card-span p-3 bg-black">
												<div className="card-body">
													<div className="d-flex align-items-center">
														<img
															className="img-fluid"
															src={sandra}
															width="80"
															alt="testimonials"
														/>
														<div className="flex-1 ms-4">
															<h6 className="fs-lg-1 mb-1 text-uppercase">
																amanda smith
															</h6>
														</div>
													</div>
													<p className="mb-0 mt-4 fw-light lh-lg">
														Investing in a luxury
														watch is a big decision,
														and this website made it
														easy. The detailed
														product descriptions and
														high-quality images
														helped me make a
														confident purchase.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-6 mb-4">
											<div className="card h-100 shadow card-span p-3 bg-black">
												<div className="card-body">
													<div className="d-flex align-items-center">
														<img
															className="img-fluid"
															src={smith}
															width="80"
															alt="testimonials"
														/>
														<div className="flex-1 ms-4">
															<h6 className="fs-lg-1 mb-1 text-uppercase">
																Ainara Vergara
															</h6>
														</div>
													</div>
													<p className="mb-0 mt-4 fw-light lh-lg">
														I was impressed by the
														authenticity of the
														watches and the secure
														payment process. The
														watch arrived with
														impeccable packaging and
														exceeded my
														expectations.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="row mt-5 flex-center">
								<div className="col-auto position-relative z-index-2">
									<ol className="carousel-indicators">
										<li
											className="active mx-2"
											data-bs-target="#carouselTestimonials"
											data-bs-slide-to="0"
										></li>
										<li
											className="mx-2"
											data-bs-target="#carouselTestimonials"
											data-bs-slide-to="1"
										></li>
										<li
											className="mx-2"
											data-bs-target="#carouselTestimonials"
											data-bs-slide-to="2"
										></li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Testimonial
