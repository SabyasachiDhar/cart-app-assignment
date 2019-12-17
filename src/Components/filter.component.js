import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, {Component} from 'react'
import Slider from 'rc-slider';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

  
const wrapperStyle = { width: "auto", marginTop:35, marginBottom:25 };
class FilterProgress extends Component{
    render(){
        return (
            <div style={wrapperStyle}>
                <Range min={100} max={10000} defaultValue={[1500, 5800]} tipFormatter={value => `${value}`} />
            </div>
        )
    }
}

export default FilterProgress;