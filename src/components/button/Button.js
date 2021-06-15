import React, {Component} from 'react'
import './Button.css'

class Button extends Component{
    constructor(props){
        super(props)
        this.state={value:10}
        //this.handleClick = this.handleClick.bind(this)
    }
    async handleClick(){
        await this.setState({value:this.props.value})
        console.log("value",this.state.value)
    }
    render(){
        return(<>
                {/* <button className={this.props.style} onClick={()=>this.handleClick()}>{this.props.value}</button> */}
                <button className={this.props.style} onClick = {this.props.handler}>{this.props.value}</button>
        </>)
    }
}

export default Button