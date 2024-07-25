import React, { useEffect, useState } from "react";
import "../../assets/css/header.css";
import "../../assets/css/theme.css"

import logo from "../../assets/img/icons/alberto-logo.png";

const Header = () => {
	
	return (
		<>
			<nav
				className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
				data-navbar-on-scroll="data-navbar-on-scroll"
			>
				<div className="container">
					<a
						className="navbar-brand d-inline-flex"
						href="index.html"
						style={{
							alignItems: "center",
						}}
					>
						<img
							style={{
								width: "60px",
								height: "60px",
							}}
							src={logo}
							alt=""
						/>
						<span className="text-light fs-2 fw-bold ms-2">
							Alberto
						</span>
					</a>
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item px-2">
								<a
									className="nav-link fw-bold active"
									aria-current="page"
									href="#collections"
								>
									WATCHES
								</a>
							</li>
							<li className="nav-item px-2">
								<a className="nav-link fw-bold" href="#about">
									About
								</a>
							</li>
							<li className="nav-item px-2">
								<a
									className="nav-link fw-bold"
									href="#collections"
								>
									Products
								</a>
							</li>
							<li className="nav-item px-2">
								<a className="nav-link fw-bold" href="#testimonial">
									Reviews
								</a>
							</li>
							<li className="nav-item px-2">
								<a className="nav-link fw-bold" href="#">
									Technology
								</a>
							</li>
							<li className="nav-item px-2">
								<a className="nav-link fw-bold" href="#contact">
									Contact
								</a>
							</li>
						</ul>
						<form className="d-flex">
							<a className="text-primary" href="#!">
								<svg
									className="feather feather-phone-call"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
								</svg>
							</a>
							<div className="ms-4 text-light fw-bold">
								1 (800) 862 6772
							</div>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
