import React, {Component} from 'react'
import './Input.css'

class Input extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div className={this.props.style}>
            <div className="right height">{this.props.operation}</div>
            <div><input value={this.props.value} className={`right top ${this.props.style2}`} type="text" disabled /></div>
        </div>)
    }
}

export default Input