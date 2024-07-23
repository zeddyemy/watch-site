import React from 'react'
import brand1 from "../../assets/img/gallery/rado.png"
import brand2 from "../../assets/img/gallery/swatch.png";
import brand3 from "../../assets/img/gallery/omega-1.png";
import brand4 from "../../assets/img/gallery/zenith.png";

const Brands = () => {
    return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 d-flex flex-center">
						<img src={brand1} alt="brands" />
					</div>
					<div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 d-flex flex-center">
						<img src={brand2} alt="brands" />
					</div>
					<div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 d-flex flex-center">
						<img src={brand3} alt="brands" />
					</div>
					<div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 d-flex flex-center">
						<img src={brand4} alt="brands" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Brands