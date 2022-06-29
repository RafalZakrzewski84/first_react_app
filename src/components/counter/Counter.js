/** @format */

import React, { useState } from 'react';

//React.Fragment - use to do not nest elements in div!!!!
//adding props in counter function
const Counter = (props) => {
	//printing props
	console.log(props);

	//useState - controlling state of component
	//useState - setting function should have the same name like variable
	//useStet(here we initialize variable)
	const [count, setCount] = useState(props.starterCounter);

	//function for setting count and counter from app
	const counterSetting = () => {
		//setting count variable from counter.js
		setCount(count + 1);
		//setting counter variable from app.js using its setting function from passed props
		props.setCounter(count + 1);
	};
	return (
		<React.Fragment>
			<span>{count}</span>
			<button onClick={counterSetting}>Add1</button>
		</React.Fragment>
	);
};

export default Counter;
