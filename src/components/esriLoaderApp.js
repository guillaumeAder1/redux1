import React from 'react'
import * as  EsriLoader from 'esri-loader'

class EsriLoaderApp extends React.Component {

    componentWillMount() {
        EsriLoader.bootstrap((err) => {
            if (err) {
                // handle any loading errors
                console.error(err);
            } else {
                // optionall execute any code once it's preloaded
                this.createMap();
            }
        }, {
                // use a specific version instead of latest 4.x                
                url: 'https://js.arcgis.com/3.21/'
            })
    }

    createMap() {
        const center = (this.props.station.name) ? this.props.station.coord : [-6.2603, 53.3498];
        // first, we use Dojo's loader to require the map class
        EsriLoader.dojoRequire(['esri/map'], (Map) => {
            // create map with the given options at a DOM node w/ id 'mapNode'
            this.map = new Map('mapNode', {
                center: center,
                zoom: 12,
                basemap: 'dark-gray'
            });
        });
    }
    refreshMapView() {
        if (!this.props.station) {
            return false;
        }
        this.map.centerAndZoom(this.props.station.coord, 15)
    }

    draw() {
        if (this.props.list.length) {
            EsriLoader.dojoRequire(["esri/layers/GraphicsLayer", "esri/graphic"], (Gl, Graphic) => {
                if (!this.layer) {
                    this.layer = new Gl({ id: 'Graphiclayer' });
                    this.map.addLayer(this.layer);
                }
                this.layer.clear();
                this.props.list.forEach((item) => {
                    const point = {
                        "geometry": {
                            "x": item.position.lng, "y": item.position.lat,
                            "spatialReference": { "wkid": 4326 }
                        }, "attributes": {
                            "XCoord": -104.4140625,
                            "YCoord": 69.2578125, "Plant": "Mesa Mint"
                        }, "symbol": {
                            "color": [255, 0, 0, 128],
                            "size": 12, "angle": 0, "xoffset": 0, "yoffset": 0, "type": "esriSMS",
                            "style": "esriSMSSquare", "outline": {
                                "color": [0, 0, 0, 255], "width": 1,
                                "type": "esriSLS", "style": "esriSLSSolid"
                            }
                        }, "infoTemplate": {
                            "title": item.name, "content": "Free Stands: " + item.available_bike_stands +
                            "Free bikes: " + item.available_bikes
                        }
                    }
                    this.layer.add(new Graphic(point));

                })
            })

        }

    }


    render() {
        this.refreshMapView();
        this.draw();
        return (
            <div id='mapNode'></div>
        )
    }

}

export default EsriLoaderApp;