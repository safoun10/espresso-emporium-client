import React, { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { BsCup, BsCupFill, BsCupHot, BsCupHotFill } from "react-icons/bs";

const Products = ({ coffees }) => {
	console.log(coffees);

	return (
		<div className="product-bg">
			<div
				style={{ maxWidth: "1200px", margin: "auto" }}
				className="py-5"
			>
				<div className="text-rancho text-center fs-4 my-3">
					-- Sip & Savour --
				</div>
				<div className="display-3 text-rancho text-coffee text-shadow text-center">
					Our Popular Products
				</div>
				<Link
					className="text-decoration-none d-flex justify-content-center align-items-center my-3"
					to={"/add-new-coffee"}
				>
					<div className="btn add-new-coffee">
						<span className="fs-4 text-rancho">
							Add New Coffee{" "}
						</span>
						<BsCupFill></BsCupFill>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Products;
