import React, { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { BsCupFill } from "react-icons/bs";
import SingleProduct from "../singleProduct/SingleProduct";

const Products = ({ coffeeData, coffees, setCoffees }) => {
	return (
		<div className="product-bg mb-5">
			<div className="py-5">
				<div className="text-rancho text-center fs-4 my-3">
					-- Sip & Savour --
				</div>
				<div className="display-3 text-rancho text-coffee text-shadow text-center pb-5">
					Our Popular Products
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<Link
						className="text-decoration-none my-3"
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
			<div className="row" style={{ maxWidth: "1200px", margin: "auto" }}>
				{coffeeData.map((coffee) => (
					<SingleProduct
						key={coffee._id}
						coffee={coffee}
						coffees={coffees}
						setCoffees={setCoffees}
					></SingleProduct>
				))}
			</div>
		</div>
	);
};

export default Products;
