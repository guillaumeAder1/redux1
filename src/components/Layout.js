import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getUsersList } from '../actions/userActions.js'
import { getAnimalsList } from '../actions/animalActions.js'
import * as bikeActions from '../actions/bikesActions'

import SelectabeList from './selectableList.js'
import EsriLoaderApp from './esriLoaderApp.js'
import FilterData from './Filter.js'
//import EsriMapComponent from './esriMap.js'


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





class Layout extends React.Component {

	getUsers() {
		this.props.dispatch(getUsersList());
		this.props.dispatch(getAnimalsList());
	}
	componentWillMount() {
		this.props.getDataCities();
		this.props.getBikesList();
	}
	bikesList() {
		// this.props.getBikeList()
	}
	onSelectList = (val) => {
		console.log(val);
		//this.props.dispatch(bikeActions.selectStation(val))
		this.props.selectStation(val)
	}
	cityChanged(city) {
		console.log(city)
		// this.props.dispatch(bikeActions.getDataCity(city));

		this.props.getStationsList(city);
	}

	render() {

		const bikesList = this.props.bikes.list.map((item, i) => {
			return item;
		})
		return (
			<div className="row">
				<h1>{this.props.appTitle}</h1>
				<FilterData list={this.props.bikes.cities} onUpdate={(value) => this.cityChanged(value)} />
				<div className="col-sm-2 listContainer">
					<SelectabeList onSelect={this.onSelectList} name='Dublin station' list={bikesList} />
				</div>

				<div className="col-sm-10 mapContainer">
					<EsriLoaderApp station={this.props.bikes.selectedStation} list={this.props.bikes.list} />
				</div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log("STATE ::", state, this.props)
	return {
		bikes: state.bikesData
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(bikeActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);

//https://github.com/reactjs/react-redux/issues/1