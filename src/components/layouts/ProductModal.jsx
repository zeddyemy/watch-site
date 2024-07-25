import React from 'react'

const ProductModal = ({prodImg, prodDetails}) => {
    return (
		<>
			<div id="product-modal" className="">
				<div className="row h-100 align-items-center">
                    <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                        <div id="product-modal-card" className="card bg-black text-white p-6 pb-8">
                            <div className="prod-img">
                                <img src={prodImg} alt="product Image" />
                            </div>
                            <div className="product-details"></div>
                        </div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductModal
