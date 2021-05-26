import React from 'react';

const Light = (props) => {
	return (
		<>
			<img src={props.image} onClick={props.onClick} alt='' />
		</>
	);
};
export default Light;
