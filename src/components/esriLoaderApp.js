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
        const center = (this.props.station) ? this.props.station : [-6.2603, 53.3498];
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
        this.map.centerAndZoom(this.props.station, 15)
    }

    render() {
        this.refreshMapView();
        return (
            <div id='mapNode'></div>
        )
    }

}

export default EsriLoaderApp;