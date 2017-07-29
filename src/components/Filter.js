import React from 'react'

class FilterData extends React.Component{

    getCity(e){
        console.log(e.target.value, this.props)
        this.props.onUpdate(e.target.value);
    }
    render (){
        const list = this.props.list.map((item,i)=>{
            return (<option key={i} value={item.name}>{item.name}</option>);
        })
        return (
            <div>
                <label>Cities: </label>
                <select onChange={(e)=>this.getCity(e)}>
                    {list}
                </select>
            </div>
        );
    }
}

export default FilterData;