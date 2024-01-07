import React from "react";
import "./TopHeader.css";

const TopHeader = () => {
	return (
		<div className="bg-top-header gap-2">
			<div>
				<img
					src="https://i.ibb.co/6RpqF4P/logo.png"
					className="logo-img"
					alt="logo"
				/>
			</div>
			<div className="display-4 text-rancho text-white">
				Espresso Emporium
			</div>
		</div>
	);
};

export default TopHeader;
