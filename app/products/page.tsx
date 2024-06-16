"use client";
import React from "react";
import Button from "../components/Button";
import Card, { CardProps } from "../components/Card";

type ProductPageProps = {
	params?: Record<string, any>;
	searchParams?: Record<string, string>;
};

const page = (p: ProductPageProps) => {
	const ProductsArr: Array<CardProps> = [
		{
			title: "Product1",
			text: "Content1",
			imageLink:
				"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		},
		{
			title: "Product2",
			text: "Content2",
			imageLink:
				"https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		},
		{
			title: "Product3",
			text: "Content3",
			imageLink:
				"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
		}
	];
	return (
		<>
			<div>Products Page</div>
			<div className="flex gap-5">
				{ProductsArr.map((product: CardProps, index) => (
					<Card
						key={index}
						text={product.text}
						title={product.title}
						imageLink={product.imageLink}
					/>
				))}
			</div>

			<Button
				onClick={() => {
					alert();
				}}
				text="Click"
			/>
		</>
	);
};

export default page;
