/** @format */

import React, { useState } from 'react';

//React.Fragment - use to do not nest elements in div!!!!
//adding props in counter function
const Counter = () => {
	const [count, setCount] = useState(0);

	//function for setting count and counter from app
	const counterSetting = () => {
		//setting count variable from counter.js
		setCount(count + 1);
	};
	return (
		<div>
			<span>{count}</span>
			<button onClick={counterSetting}>Add1</button>
		</div>
	);
};

export default Counter;
