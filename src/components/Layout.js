import React from 'react';
import { connect } from 'react-redux'

import { getUsersList } from '../actions/userActions.js'
import { getAnimalsList } from '../actions/animalActions.js'
import { getBikesList } from '../actions/bikesActions.js'

import SelectabeList from './selectableList.js'

import { Map, Layers, Graphic, Symbols, Geometry } from 'react-arcgis';

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
		console.log(Map)
		this.bikesList();
	}
	bikesList() {
		this.props.dispatch(getBikesList());
	}



	render() {
		// const titanic = (
		// 	<Graphic>
		// 		<Symbols.SimpleMarkerSymbol
		// 			symbolProperties={{
		// 				color: [191, 29, 14],
		// 				outline: {
		// 					color: [46, 46, 46],
		// 					width: 1
		// 				}
		// 			}}
		// 		/>
		// 		<Geometry.Point
		// 			geometryProperties={{
		// 				latitude: 53.3498,
		// 				longitude: -6.2603
		// 			}}
		// 		/>
		// 	</Graphic>
		// );
		const bikesGraphics = this.props.data.bikesData.list.map((item, i) => {
			return (
				<Graphic key={i}>
					<Symbols.SimpleMarkerSymbol
						symbolProperties={{
							color: [217, 118, 116, 0.6],
							outline: {
								color: [255, 255, 255],
								width: 1
							}
						}}
					/>
					<Geometry.Point
						geometryProperties={{
							latitude: item.position.lat,
							longitude: item.position.lng
						}}
					/>
				</Graphic>
			);
		})

		const bikesList = this.props.data.bikesData.list.map((item, i) => {
			return item;
		})
		return (
			<div className="row">
				<h1>{this.props.appTitle}</h1>
				<div className="col-sm-2">
					<SelectabeList name='Dublin station' list={bikesList} />
				</div>
				<div className="col-sm-10">
					<Map
						style={{ width: '100%', height: '80vh' }}
						mapProperties={{ basemap: 'gray' }}
						viewProperties={{
							center: [-6.2603, 53.3498],
							zoom: 12
						}}>
						<Layers.GraphicsLayer>
							{bikesGraphics}
						</Layers.GraphicsLayer>
					</Map>
				</div>
			</div >
		)
	}
}
export default connect(mapStateToProps)(Layout);

//https://github.com/reactjs/react-redux/issues/1