import React from "react";

const UserProfile = (props: any) => {
	return (
		<div>
			{props.type === "View" ? (
			
			) : (
				"edit sayfası"
			)}
		</div>
	);
};

export default UserProfile;
