import React from 'react';
import { connect } from 'react-redux'

import { getUsersList } from '../actions/userActions.js'
import { getAnimalsList } from '../actions/animalActions.js'
import { getBikesList } from '../actions/bikesActions.js'

import SelectabeList from './selectableList.js'

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
	componentWillMount() {
		this.bikesList();
	}
	bikesList(){
		this.props.dispatch(getBikesList());
	}

	render() {
		const bikes = this.props.data.bikesData.list.map((item, i)=>{
			return item;
		})
		return (
			<div className="row">
				<h1>{this.props.appTitle}</h1>
				<div className="col-sm-2">					
					<SelectabeList name='Bikes' list={bikes}/>
				</div>
				<div className="col-sm-10">
					<Map style={{ width: '100%', height: '80vh' }}
						mapProperties={{ basemap: 'gray' }} viewProperties={{
							center: [-6.2603, 53.3498],
							zoom: 12
						}} />
				</div>
			</div >
		)
	}
}
export default connect(mapStateToProps)(Layout);

//https://github.com/reactjs/react-redux/issues/1