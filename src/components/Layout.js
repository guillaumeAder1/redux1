import React from 'react';
import { connect } from 'react-redux'

import { getUsersList } from '../actions/userActions.js'
import { getAnimalsList } from '../actions/animalActions.js'
import { getBikesList } from '../actions/bikesActions.js'


import { Map } from 'react-arcgis';

// function mapStateToProps(state) {
// 	return { todos: state.todos };
// }

// function mapDispatchToProps(dispatch) {
// 	return { actions: bindActionCreators(actionCreators, dispatch) };
// }

// class MyApp extends React.Component {
// 	// ...define your main app here
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MyApp);

function mapStateToProps(state) {
	console.log("STATE ::", state, this.props)
	return { data: state }
}

class Layout extends React.Component {

	getUsers() {
		console.log('get user function')
		this.props.dispatch(getUsersList());
		console.log(getAnimalsList())
		this.props.dispatch(getAnimalsList());
		this.props.dispatch(getBikesList());


	}
	render() {
		console.log(this.props)
		return (

			<div>
				<h1>{this.props.appTitle}</h1>
				<button onClick={() => this.getUsers()}>get Users</button>
				<Map style={{ width: '150px', height: '150px' }}
					mapProperties={{ basemap: 'satellite' }} />
			</div>
		)
	}
}
export default connect(mapStateToProps)(Layout);

//https://github.com/reactjs/react-redux/issues/1