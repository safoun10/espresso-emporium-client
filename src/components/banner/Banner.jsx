import React from 'react';
import "./Banner.css";
import LazyLoad from "react-lazy-load";


const Banner = () => {
    return (
		<LazyLoad>
			<div className="banner-img text-white d-flex justify-content-center align-items-center">
				<div
					className="row"
					style={{ maxWidth: "1200px", margin: "auto" }}
				>
					<div className="col-0 col-md-5"></div>
					<div className="col-11 col-md-7 mx-auto">
						<div className="display-5 text-rancho">
							Would you like a Cup of Delicious Coffee?
						</div>
						<div className="fw-light my-4">
							It's coffee time - Sip & Savor Relaxation in every
							sip! Get the nostalgia back!! Your companion of
							every moment!!! Enjoy the beautiful moments and make
							them memorable
						</div>
						<div className="btn btn-learn-more bg-coffee text-rancho rounded-0 fs-4 w-50">
							Learn More
						</div>
					</div>
				</div>
			</div>
		</LazyLoad>
	);
};

export default Banner;