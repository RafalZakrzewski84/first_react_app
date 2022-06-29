/** @format */

import React, { useState } from 'react';

const Counter = () => {
	//useState - setting function should have the same name like variable
	//useStet(here we initialize variable)

	//React.Fragment - use to do not nest elements in div!!!!
	const [count, setCount] = useState(0);

	return (
		<React.Fragment>
			<span>{count}</span>
			<button onClick={() => setCount(count + 1)}>Add1</button>
		</React.Fragment>
	);
};

export default Counter;
