import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./AddCoffee.css"

const AddCoffee = () => {
	return (
		<div
			className="py-5"
			style={{ maxWidth: "1200px", margin: "auto" }}
		>
			<div>
				<Link
					className="text-glow w-25 d-flex justify-content-center py-2 mb-4 align-items-center text-decoration-none text-coffee text-rancho fs-2"
					to={"/home"}
				>
					<div>
						<BsArrowLeft className="text-coffee me-2"></BsArrowLeft>
					</div>
					<div>Back To Home</div>
				</Link>
			</div>
			<div className="form-bg">
				<div className="mb-5">
					<div className="text-center w-75 mx-auto text-rancho display-3 mb-4">
						Add New Coffee
					</div>
					<div className="text-center w-75 mx-auto text-center text-secondary">
						It is a long established fact that a reader will be
						distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is
						that it has a more-or-less normal distribution of
						letters, as opposed to using Content.
					</div>
				</div>
				<div>
					<form className="row">
						<div className="col-md-6 col-11">
							<div className="fw-bold text-titles">Name</div>
							<input
								className="input-coffee-data"
								type="text"
								required
								placeholder="Enter Coffee Name"
							/>
						</div>
						<div className="col-md-6 col-11">
							<div className="fw-bold text-titles">Name</div>
							<input
								className="input-coffee-data"
								type="text"
								required
								placeholder="Enter Coffee Name"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddCoffee;
