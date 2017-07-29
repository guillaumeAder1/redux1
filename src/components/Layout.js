import React from 'react';
import { connect } from 'react-redux'

import { getUsersList } from '../actions/userActions.js'
import { getAnimalsList } from '../actions/animalActions.js'
import * as bikeActions from '../actions/bikesActions.js'

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

function mapStateToProps(state) {
	console.log("STATE ::", state, this.props)
	return { data: state }
}



class Layout extends React.Component {	

	getUsers() {
		this.props.dispatch(getUsersList());
		this.props.dispatch(getAnimalsList());
	}
	componentWillMount() {

		this.props.dispatch(bikeActions.getStationsList());
		console.log(Map)
		this.bikesList();
	}
	bikesList() {
		this.props.dispatch(bikeActions.getBikesList());
	}
	onSelectList = (val) => {		
		console.log(val);
		this.props.dispatch(bikeActions.selectStation(val))
	}
	cityChanged(city){
		console.log(city)
		this.props.dispatch(bikeActions.getDataCity(city));
	}

	render() {		

		const bikesList = this.props.data.bikesData.list.map((item, i) => {
			return item;
		})
		return (
			<div className="row">
				<h1>{this.props.appTitle}</h1>
				<FilterData list={this.props.data.bikesData.cities} onUpdate={(value) => this.cityChanged(value)} />				
				<div className="col-sm-2 listContainer">
					<SelectabeList onSelect={this.onSelectList}  name='Dublin station' list={bikesList} />
				</div>          

                <div  className="col-sm-10 mapContainer">
                    <EsriLoaderApp station={this.props.data.bikesData.selectedStation} list={this.props.data.bikesData.list}/>
                </div>
			               
			</div>
		)
	}
}
export default connect(mapStateToProps)(Layout);

//https://github.com/reactjs/react-redux/issues/1