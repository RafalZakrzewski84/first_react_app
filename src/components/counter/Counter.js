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

	return (
		<React.Fragment>
			<span>{count}</span>
			<button onClick={() => setCount(count + 1)}>Add1</button>
		</React.Fragment>
	);
};

export default Counter;
