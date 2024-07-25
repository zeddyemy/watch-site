import React from 'react'

import Latest from "./collections_tabs/Latest";
import Popular from "./collections_tabs/Popular";
import Vintage from './collections_tabs/Vintage';
import Luxury from './collections_tabs/Luxury';
import Smart from './collections_tabs/Smart';

const Collections = () => {
	const tabButtons = [
		{
			id: "0",
			name: "latest",
			label: "Latest",
			component: <Latest />,
		},
		{
			id: "1",
			name: "vintage",
			label: "Vintage",
			component: <Vintage />,
		},
		{
			id: "2",
			name: "luxury",
			label: "Luxury",
			component: <Luxury />,
		},
		{
			id: "3",
			name: "smart",
			label: "Smart Watches",
			component: <Smart />,
		},
	];

	return (
		<>
			<div className="container">
				<div className="row h-100">
					<div className="col-lg-7 mt-7">
						<h5 className="fs-3 fs-lg-5 lh-sm mb-0 text-uppercase">
							Collections
						</h5>
					</div>
					<div className="col-12">
						<nav>
							<div
								className="nav nav-tabs watch-tabs mb-4 justify-content-end"
								id="nav-tab"
								role="tablist"
							>
								{tabButtons.map((button) => (
									<button
										key={button.id}
										className={`nav-link ${button.id == "0" ? "active" : ""}`}
										id={`nav-${button.name}-tab`}
										data-bs-toggle="tab"
										data-bs-target={`#nav-${button.name}`}
										type="button"
										role="tab"
										aria-controls={`nav-${button.name}`}
										aria-selected={
											button.id === "0" ? "true" : "false"
										}
									>
										{button.label}
									</button>
								))}
								
							</div>
						</nav>
						<div className="tab-content" id="nav-tabContent">
							{tabButtons.map((button) => (
								<div
									key={button.id}
									className={`tab-pane fade ${button.id == "0" ? "show active" : ""}`}
									id={`nav-${button.name}`}
									role="tabpanel"
									aria-labelledby={`nav-${button.name}-tab`}
								>
									{button.component}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Collections