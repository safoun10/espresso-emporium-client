import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import TopHeader from '../../components/topHeader/TopHeader';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
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
			</div>
            
		</div>
	);
};

export default UpdateCoffee;