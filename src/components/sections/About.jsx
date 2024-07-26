import React from 'react'
import aboutImg from "../../assets/img/gallery/store-bg.png";

const About = () => {
    return (
		<>
			<div
				className="bg-holder"
				style={{
					backgroundImage: `url(${aboutImg})`,
					backgroundPosition: "left bottom",
					backgroundSize: "contain",
				}}
			></div>

			<div className="container-lg">
				<div className="row flex-center">
					<div className="col-6 order-md-0 text-center text-md-start"></div>
					<div className="col-sm-10 col-md-6 col-lg-6 text-center text-md-start">
						<div className="col-4 position-relative ms-auto py-5">
							<a
								className="carousel-control-prev carousel-icon z-index-2"
								href="#carouselExampleFade"
								role="button"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">
									Previous
								</span>
							</a>
							<a
								className="carousel-control-next carousel-icon z-index-2"
								href="#carouselExampleFade"
								role="button"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</a>
						</div>
						<div
							className="carousel slide carousel-fade"
							id="carouselExampleFade"
							data-bs-ride="carousel"
						>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<div className="row h-100">
										<div className="col-12">
											<h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">
												Our store
											</h5>
											<p className="my-4 pe-xl-5">
												We are passionate about crafting
												a curated collection of
												exquisite timepieces. Our store
												is a haven for watch
												enthusiasts, offering a diverse
												range of styles from classic and
												elegant to contemporary and
												bold. We pride ourselves on
												providing exceptional quality,
												meticulous attention to detail,
												and unparalleled customer
												service. Discover the perfect
												timepiece to complement your
												unique style and make a lasting
												impression.
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="row h-100">
										<div className="col-12">
											<h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">
												Our store
											</h5>
											<p className="my-4 pe-xl-5">
												We are passionate about crafting
												a curated collection of
												exquisite timepieces. Our store
												is a haven for watch
												enthusiasts, offering a diverse
												range of styles from classic and
												elegant to contemporary and
												bold. We pride ourselves on
												providing exceptional quality,
												meticulous attention to detail,
												and unparalleled customer
												service. Discover the perfect
												timepiece to complement your
												unique style and make a lasting
												impression.
											</p>
										</div>
									</div>
								</div>
								<div className="carousel-item">
									<div className="row h-100">
										<div className="col-12">
											<h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">
												Our store
											</h5>
											<p className="my-4 pe-xl-5">
												We are passionate about crafting
												a curated collection of
												exquisite timepieces. Our store
												is a haven for watch
												enthusiasts, offering a diverse
												range of styles from classic and
												elegant to contemporary and
												bold. We pride ourselves on
												providing exceptional quality,
												meticulous attention to detail,
												and unparalleled customer
												service. Discover the perfect
												timepiece to complement your
												unique style and make a lasting
												impression.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About