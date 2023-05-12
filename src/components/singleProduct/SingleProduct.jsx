import React from 'react';

const SingleProduct = ({coffee}) => {

    const {name , photo , chef , taste , _id , supplier} = coffee;

    return (
		<div className="d-flex border-cool col-11 col-sm-6 mx-auto bg-single-product">
			<div>
				<img className='img-fluid' src={photo} alt="product_photo" />
			</div>
			<div className='d-flex flex-column align-items-start justify-content-center gap-1'>
				<div>
					<span className="text-coffee fw-bold me-2">Name : </span>
					<span className="text-secondary">{name}</span>
				</div>
				<div>
					<span className="text-coffee fw-bold me-2">Chef : </span>
					<span className="text-secondary">{chef}</span>
				</div>
				<div>
					<span className="text-coffee fw-bold me-2">Taste : </span>
					<span className="text-secondary">{taste}</span>
				</div>
				<div>
					<span className="text-coffee fw-bold me-2">Supplier : </span>
					<span className="text-secondary">{supplier}</span>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;

// category: "Black coffee";
// chef: "safoun ";
// details: "What are you suppose to do then ?";
// name: "MD Sultan Mahmud Safoun";
// photo: "https://i.postimg.cc/hPNPMGKy/product-One.png";
// supplier: "Toilet corner";
// taste: "Bitter";
// _id: "645e5b52c1083a3f99fb8126";