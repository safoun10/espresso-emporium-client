import React from 'react';
import { BsEyeFill, BsPencilSquare } from 'react-icons/bs';
import { FaTrash } from "react-icons/fa";
import "./SingleProduct.css"
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleProduct = ({coffee , coffees , setCoffees}) => {

    const {name , photo , chef , taste , _id , supplier} = coffee;

    const handleDelete = id => {
        Swal.fire({
			title: `Are you sure , you want to delete ${name} `,
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}` , {
                    method : "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire("Deleted!", "Your coffee has been deleted from database.", "success");
                    }
					const remaining = coffees.filter(c => c._id !== id);
					setCoffees(remaining);
                })
			}
		});
    }

    return (
		<div className="d-flex p-4 align-items-center justify-content-between border-cool col-11 col-lg-6 mx-auto bg-single-product rounded-4">
			<div className="d-flex align-items-center">
				<div>
					<img
						className="img-fluid"
						src={photo}
						alt="product_photo"
					/>
				</div>
				<div className="d-flex flex-column align-items-start justify-content-center gap-1">
					<div className="w-75">
						<span className="text-coffee fw-bold">
							Name <br />
						</span>
						<span className="text-secondary w-100">{name}</span>
					</div>
					<div className="w-75">
						<span className="text-coffee fw-bold">
							Chef <br />
						</span>
						<span className="text-secondary">{chef}</span>
					</div>
					<div className="w-75">
						<span className="text-coffee fw-bold">
							Taste <br />
						</span>
						<span className="text-secondary">{taste}</span>
					</div>
					<div className="w-75">
						<span className="text-coffee fw-bold">
							Supplier <br />
						</span>
						<span className="text-secondary">{supplier}</span>
					</div>
				</div>
			</div>
			<div className="ms-1 gap-3 d-flex flex-column">
				<Link className="text-decoration-none text-coffee">
					<div className="eye fs-5">
						<BsEyeFill></BsEyeFill>
					</div>
				</Link>
				<Link
					to={`/update-coffee/${_id}`}
					className="text-decoration-none text-coffee"
				>
					<div className="pencil fs-5">
						<BsPencilSquare></BsPencilSquare>
					</div>
				</Link>
				<Link className="text-decoration-none text-coffee">
					<div
						onClick={() => handleDelete(_id)}
						className="trash fs-5"
					>
						<FaTrash></FaTrash>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default SingleProduct;