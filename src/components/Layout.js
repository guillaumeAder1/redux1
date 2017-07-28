import React from 'react';
import { connect } from 'react-redux'

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

connect((store) => {
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

//https://github.com/reactjs/react-redux/issues/1