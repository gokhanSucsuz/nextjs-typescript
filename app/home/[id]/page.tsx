import { HomePagePropTypes } from "@/app/pagePropsTypes";
import React from "react";

const page = (p: HomePagePropTypes) => {
	return (
		<>
			<div>Home Detail Page - Id = {p.params?.id}</div>
			<div>Home Detail Page - SearchParams = {p.searchParams?.search}</div>
		</>
	);
};

export default page;
