import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import TopHeader from "../../components/topHeader/TopHeader";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const coffee = useLoaderData();
	const { name, photo, chef, taste, _id, supplier, category, details } =
		coffee;

	const navigate = useNavigate();

	const handleUpdateCoffee = (event) => {
		event.preventDefault();

		const form = event.target;

		const name = form.name.value;
		const chef = form.chef.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const newCoffee = {
			name,
			chef,
			supplier,
			taste,
			category,
			details,
			photo,
		};

		console.log(newCoffee);

		fetch(`http://localhost:5000/coffee/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					form.reset();
					Swal.fire({
						title: "Success !!!",
						text: "Successfully updated coffee data to database",
						icon: "success",
						confirmButtonText: "Go to Homepage",
					}).then((result) => {
						if (result.isConfirmed) {
							navigate("/home");
						}
					});
				}
				else{
					Swal.fire({
						title: "You didn't updated anything !",
						text: "Please updated coffee data to database",
						icon: "warning",
						showDenyButton : true,
						denyButtonText : "Edit this coffee details again",
						confirmButtonText: "Go to Homepage",
					}).then((result) => {
						if (result.isConfirmed) {
							navigate("/home");
						}
					});
				}
			});
	};

	return (
		<div>
			<TopHeader></TopHeader>
			<div
				className="py-5"
				style={{ maxWidth: "1200px", margin: "auto" }}
			>
				<div>
					<Link
						className="text-glow w-home d-flex justify-content-center py-2 mb-4 align-items-center text-decoration-none text-coffee text-rancho fs-2"
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
						<div className="text-center mx-auto text-rancho display-3 mb-4">
							Update Existing Coffee Details
						</div>
						<div className="text-center fs-4 mb-2 text-rancho">
							For : {name}{" "}
						</div>
						<div className="text-center w-secondary mx-auto text-center text-secondary">
							It is a long established fact that a reader will be
							distracted by the readable content of a page when
							looking at its layout. The point of using Lorem
							Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using
							Content.
						</div>
					</div>
					<div>
						<form className="row" onSubmit={handleUpdateCoffee}>
							<div className="col-md-6 col-12 mb-4">
								<div className="fw-bold text-titles">Name</div>
								<input
									className="input-coffee-data"
									type="text"
									name="name"
									required
									defaultValue={name}
									placeholder="Update Coffee Name"
								/>
							</div>
							<div className="col-md-6 col-12 mb-4">
								<div className="fw-bold text-titles">Chef</div>
								<input
									className="input-coffee-data"
									type="text"
									name="chef"
									required
									defaultValue={chef}
									placeholder="Update Chef Name"
								/>
							</div>
							<div className="col-md-6 col-12 mb-4">
								<div className="fw-bold text-titles">
									Supplier
								</div>
								<input
									className="input-coffee-data"
									type="text"
									name="supplier"
									required
									defaultValue={supplier}
									placeholder="Update Coffee Supplier"
								/>
							</div>
							<div className="col-md-6 col-12 mb-4">
								<div className="fw-bold text-titles">Taste</div>
								<input
									className="input-coffee-data"
									type="text"
									name="taste"
									required
									defaultValue={taste}
									placeholder="Update Coffee Taste"
								/>
							</div>
							<div className="col-md-6 col-12 mb-4">
								<div className="fw-bold text-titles">
									Category
								</div>
								<input
									className="input-coffee-data"
									type="text"
									name="category"
									required
									defaultValue={category}
									placeholder="Update Coffee Category"
								/>
							</div>
							<div className="col-md-6 col-12 mb-4">
								<div className="fw-bold text-titles">
									Details
								</div>
								<input
									className="input-coffee-data"
									type="text"
									name="details"
									required
									defaultValue={details}
									placeholder="Update Coffee Details"
								/>
							</div>
							<div className="col-md-12 col-12 mb-4">
								<div className="fw-bold text-titles">Photo</div>
								<input
									className="input-coffee-data"
									type="url"
									name="photo"
									required
									defaultValue={photo}
									placeholder="Update Coffee URL"
								/>
							</div>
							<div>
								<input
									name="submit"
									type="submit"
									className="btn btn-add text-rancho fs-4 text-coffee w-100"
									value={"Update Coffee Details"}
								></input>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpdateCoffee;
