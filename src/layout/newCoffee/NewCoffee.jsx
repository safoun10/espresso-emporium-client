import React from 'react';
import TopHeader from '../../components/topHeader/TopHeader';
import AddCoffee from '../../components/addCoffee/AddCoffee';
import "./NewCoffee.css"

const NewCoffee = () => {
    return (
		<div>
			<TopHeader></TopHeader>
			<section className="new-coffee-bg">
				<AddCoffee></AddCoffee>
			</section>
		</div>
	);
};

export default NewCoffee;