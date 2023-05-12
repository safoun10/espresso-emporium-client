import React, { useState } from "react";
import TopHeader from "../../components/topHeader/TopHeader";
import Banner from "../../components/banner/Banner";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
import { useLoaderData } from "react-router-dom";

const Body = () => {
    const coffeeData = useLoaderData();

	return (
		<div>
			<TopHeader></TopHeader>
			<Banner></Banner>
			<Features></Features>
			<Products coffees={coffeeData}></Products>
			<Footer></Footer>
		</div>
	);
};

export default Body;
