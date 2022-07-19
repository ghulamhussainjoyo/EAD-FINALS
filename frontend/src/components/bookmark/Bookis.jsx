import React from 'react';

function Bookis({ data }) {
	return (
		<div className="bookis">
			<a href={data.link}>
				<h1>{data.link.substring(12, 13)}</h1>
				<label>apple</label>
			</a>
		</div>
	);
}

export default Bookis;
