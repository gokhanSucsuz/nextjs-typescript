import React from "react";
import { HomePagePropTypes } from "../pagePropsTypes";

const page = (p: HomePagePropTypes) => {
	console.log(p.searchParams?.search);
	return <div>Home page</div>;
};

export default page;
