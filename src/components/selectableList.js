import React from 'react';

export default class SelectableList extends React.Component {

	selectStation(index) {
		console.log(this.props.list[index]);
		this.props.onSelect(this.props.list[index]);
	}

	render() {

		const bikes = this.props.list.map((item, i) => {
			return <li key={i} onClick={() => this.selectStation(i)}>{item.address}</li>
		});
		return (
			<div>				
				<ul>{bikes}</ul>
			</div>
		);
	}
}