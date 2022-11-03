import { ReactElement } from "react";
import { NextPageWithLayout } from "types";
import ErrorLayout from "@layouts/error";
import Title from "@components/Title/Title";
import Description from "@components/Description/Description";

const NotFound: NextPageWithLayout = () => (
	<div>
		<Title
			marginBottom={{
				sm: "2.5rem"
			}}
		>
			404: The page cannot be found
		</Title>
		<Description 
			textAlign="left"
			marginBottom={{
				sm: "0",
				md: "0"
			}}
		>
			The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
		</Description>
	</div>
);

NotFound.getLayout = (page: ReactElement) => {
	return (
		<ErrorLayout>
			{ page }
		</ErrorLayout>
	)
};

export default NotFound;