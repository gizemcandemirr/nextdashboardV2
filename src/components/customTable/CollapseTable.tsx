import { useState } from "react";


function CollapseTable({ title, children }:any) {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index: number) => {
		setToggleState(index);
	};

	return (
		<div className="container">
			<div className="bloc-tabs">
				{title.map((title:any, index:any) => (
					<button
						key={index}
						className={toggleState === index ? "tabs active-tabs" : "tabs"}
						onClick={() => toggleTab(index)}
					>
						{title}
					</button>
				))}
			</div>

			<div className="content-tabs">
				<div>{children[toggleState]}</div>
			</div>
		</div>
	);
}

export default CollapseTable;
