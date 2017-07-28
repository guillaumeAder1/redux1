import React from 'react';

export default class SelectableList extends React.Component {

	render() {

		const bikes = this.props.list.map((item, i)=>{
			return <li key={i}>{item.address}</li>
		});
		return (
			<div>			
				<div>{this.props.name} list</div>
				<ul>{bikes}</ul>
			</div>
		);
	}
}