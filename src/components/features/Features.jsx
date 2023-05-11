import React from 'react';
import "./Feature.css";

const Features = () => {
    return (
		<div className="feature-bg">
			<div
				className="col-11 col-md-12 mx-auto row"
				style={{ maxWidth: "1200px", margin: "auto" }}
			>
				<div className="col-11 mx-auto col-md-3 py-5 d-flex flex-column justify-content-center align-items-center">
					<img
						className="img-fluid"
						src="https://i.postimg.cc/NjNJf19F/aroma.png"
						alt=""
					/>
					<div className="display-6 text-coffee text-rancho my-2">
						Awesome Aroma
					</div>
					<div className="text-coffee text-normal text-center">
						You will definitely be a fan of the design & aroma of
						your coffee
					</div>
				</div>
				<div className="col-11 mx-auto col-md-3 py-5 d-flex flex-column justify-content-center align-items-center">
					<img
						className="img-fluid"
						src="https://i.postimg.cc/fLb0W9dz/quality.png"
						alt=""
					/>
					<div className="display-6 text-coffee text-rancho my-2">
						High Quality
					</div>
					<div className="text-coffee text-normal text-center">
						We served the coffee to you maintaining the best quality
					</div>
				</div>
				<div className="col-11 mx-auto col-md-3 py-5 d-flex flex-column justify-content-center align-items-center">
					<img
						className="img-fluid"
						src="https://i.postimg.cc/RZQdp2xj/grades.png"
						alt=""
					/>
					<div className="display-6 text-coffee text-rancho my-2">
						Pure Grades
					</div>
					<div className="text-coffee text-normal text-center">
						The coffee is made of the green coffee beans which you
						will love
					</div>
				</div>
				<div className="col-11 mx-auto col-md-3 py-5 d-flex flex-column justify-content-center align-items-center">
					<img
						className="img-fluid"
						src="https://i.postimg.cc/kXjXNgBZ/roasting.png"
						alt=""
					/>
					<div className="display-6 text-coffee text-rancho my-2">
						Proper Roasting
					</div>
					<div className="text-coffee text-normal text-center">
						Your coffee is brewed by first roasting the green coffee
						beans
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;