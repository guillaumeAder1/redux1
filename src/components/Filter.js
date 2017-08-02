import React from 'react'

class FilterData extends React.Component {

    getCity(e) {
        this.props.onUpdate(e.target.value);
    }
    render() {
        const list = this.props.list.map((item, i) => {
            // if (this.props.station.station.name == item.name) {
            //     alert('<dfj></dfj>')
            // }
            return (
                <option key={i} value={item.name} checked>{item.name}</option>
            );
        }, this);
        const station = (this.props.station) ? <span>Current station: {this.props.station.station.name} </span> : '';
        return (
            <div>
                <label>Cities: </label>
                <select onChange={(e) => this.getCity(e)}>
                    {list}
                </select>
                {station}
            </div>
        );
    }
}

export default FilterData;