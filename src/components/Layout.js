import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as bikeActions from '../actions/bikesActions'

import SelectabeList from './selectableList.js'
import EsriLoaderApp from './esriLoaderApp.js'
import FilterData from './Filter.js'


class Layout extends React.Component {

	componentWillMount() {
		this.props.getDataCities();
		this.props.getStationsList('dublin');
	}

	onSelectList = (val) => {
		this.props.selectStation(val)
	}
	cityChanged(city) {
		console.log(city)
		this.props.getStationsList(city);
	}

	render() {

		const bikesList = this.props.bikes.list.map((item, i) => {
			return item;
		})
		return (
			<div className="row">
				<h1>{this.props.appTitle}</h1>
				<FilterData list={this.props.bikes.cities} station={this.props.bikes.selectedStation} onUpdate={(value) => this.cityChanged(value)} />
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
	return {
		bikes: state.bikesData
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(bikeActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);

//https://github.com/reactjs/react-redux/issues/1