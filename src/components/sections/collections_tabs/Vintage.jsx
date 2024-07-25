import React from "react";

import watch1 from "../../../assets/img/gallery/watch-1.png";
import watch2 from "../../../assets/img/gallery/watch-2.png";
import watch7 from "../../../assets/img/gallery/watch-7.png";
import vintage1 from "../../../assets/img/gallery/vintage/vintage-1.png";
import vintage2 from "../../../assets/img/gallery/vintage/vintage-2.png";
import vintage3 from "../../../assets/img/gallery/vintage/vintage-3.png";
import vintage4 from "../../../assets/img/gallery/vintage/vintage-4.png";

const Vintage = () => {
	return (
		<>
			<div
				className="carousel slide"
				id="carouselVintage"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div
						className="carousel-item active"
						data-bs-interval="10000"
					>
						<div className="row h-100 align-items-center">
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={vintage1}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$650.00
										</h6>
										<h4 className="text-light">
											ADRIATICA ADR
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={vintage2}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$126.00
										</h6>
										<h4 className="text-light">
											SEIKO SNZGO7K1
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={vintage3}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$250.00
										</h6>
										<h4 className="text-light">
											ROAMER RM 220837
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="5000">
						<div className="row h-100 align-items-center">
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={vintage4}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$650.00
										</h6>
										<h4 className="text-light">
											ADRIATICA ADR
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={watch1}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$126.00
										</h6>
										<h4 className="text-light">
											SEIKO SNZGO7K1
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={watch2}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$250.00
										</h6>
										<h4 className="text-light">
											ROAMER RM 220837
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item" data-bs-interval="3000">
						<div className="row h-100 align-items-center">
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={watch7}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$650.00
										</h6>
										<h4 className="text-light">
											ADRIATICA ADR
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={vintage2}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$126.00
										</h6>
										<h4 className="text-light">
											SEIKO SNZGO7K1
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={vintage1}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$250.00
										</h6>
										<h4 className="text-light">
											ROAMER RM 220837
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="row h-100 align-items-center">
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={vintage4}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$650.00
										</h6>
										<h4 className="text-light">
											ADRIATICA ADR
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={vintage3}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$126.00
										</h6>
										<h4 className="text-light">
											SEIKO SNZGO7K1
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 mb-3 mb-md-0">
								<div className="card bg-black text-white p-6 pb-8">
									<img
										className="card-img"
										src={vintage2}
										alt="..."
									/>
									<div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
										<h6 className="text-primary">
											$250.00
										</h6>
										<h4 className="text-light">
											ROAMER RM 220837
										</h4>
									</div>
									<a className="stretched-link" href="#"></a>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselVintage"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselVintage"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Vintage;
