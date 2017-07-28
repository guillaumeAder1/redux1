import React from 'react';
import { Map, Layers, Graphic, Symbols, Geometry } from 'react-arcgis';


class EsriMap extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			centerTo: [ -6.2603,53.3498]
		};
	}

	componentWillMount(){
		
	}

	btnClick(){
		console.log('clicker ')
		this.setState({
			centerTo : this.props.selection
		})
	}

	render(){
		//const bikesGraphics = {}
		const bikesGraphics = this.props.list.map((item, i) => {
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
		//const centerTo = (this.props.selection) ? this.props.selection : [-6.2603, 53.3498];
		const viewP = {
			center:  this.state.centerTo,
			zoom: 12
		}
		
		return (
			<div>
				<button onClick={()=>this.btnClick()}>click</button>
				<Map
					style={{ width: '100%', height: '80vh' }}
					mapProperties={{ basemap: 'gray' }}
					viewProperties={viewP}>
					<Layers.GraphicsLayer>
						{bikesGraphics}
					</Layers.GraphicsLayer>
				</Map>
			</div>

			
		);
	}
}

export default EsriMap;
