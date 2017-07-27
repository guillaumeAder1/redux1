import React from 'react';
import { connect } from 'react-redux'

@connect((store) => {
	return {
		user: store.user
	}
})
export default class Layout extends React.Component {
	render() {
		console.log(this.props.user)
		return (

			<div>
				<h1>Layout</h1>
			</div>
		)
	}
}