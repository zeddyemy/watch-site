import React from "react";
import "../../assets/library/boxicons/css/only.used.boxicons.css"
import heroImg from "../../assets/img/gallery/header-bg.png";

const HeroHeader = () => {
	return (
		<>
				<div
					className="bg-holder"
					style={
						{
							backgroundImage: `url(${heroImg})`,
							backgroundPosition: "right top",
							backgroundSize: "contain",
						}
					}
				></div>

				<div className="container">
					<div className="row align-items-center min-vh-75 min-vh-xl-100">
						<div className="col-md-8 col-lg-6 text-md-start text-center">
							<h1 className="display-1 lh-sm text-uppercase text-light" >
								Custom Watches For &nbsp;
								<br className="d-none d-xxl-block" />
								Any Occasion
							</h1>
							<div className="pt-4">
								<a className="btn btn-sm btn-outline-primary me-3"
									href="#">
										DESIGN &amp; ORDER
								</a>
								<a className="btn btn-sm btn-outline-primary" href="#" >
									REQUEST VIRTUAL
								</a>
							</div>
						</div>
					</div>
				</div>
		</>
	);
};

export default HeroHeader;
