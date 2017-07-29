import React from 'react'
import * as  EsriLoader from 'esri-loader'

class EsriLoaderApp extends React.Component {

    componentWillMount(){
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

    createMap(){
        // first, we use Dojo's loader to require the map class
        EsriLoader.dojoRequire(['esri/map'], (Map) => {
            // create map with the given options at a DOM node w/ id 'mapNode'
            let map = new Map('mapNode', {
                center: [-118, 34.5],
                zoom: 8,
                basemap: 'dark-gray'
            });
        });
    }
    

    render(){
        return (
            <div>
                <div id='mapNode'></div>
            </div>
        )
    }

}

export default EsriLoaderApp;