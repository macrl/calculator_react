import React, {Component} from 'react'
import './Container.css'
import Button from '../button/Button'
import Input from '../input/Input'
import {URL_API,URL_API2} from '../../ConstData'


class Container extends Component{
    constructor(props){
        super(props)
        this.state={operation:"",str:"0",strPhp:"",nbVirguleInOPerande:0,displayRes:false}
    }

    async handleBtn(valBtn){
        let str=this.state.str
        if(str=="0"&&valBtn==0||str==""&&valBtn=="="||str==""&&valBtn=="*"||str==""&&valBtn=="/"||str==""&&valBtn=="+"||str==""&&valBtn=="ac"){
            return false;
        }

        if(str=="-"&&valBtn=="="||str=="-"&&valBtn=="*"||str=="-"&&valBtn=="/"||str=="-"&&valBtn=="+"){
            this.setState({str:"",strPhp:"",nbVirguleInOPerande:0,value:""})
            
            return false;
        }

        if(valBtn=='.'){
            let nbVirguleInOPerande=this.state.nbVirguleInOPerande+1
            this.setState({nbVirguleInOPerande})
            if(this.state.nbVirguleInOPerande>0){
                return false;
            }
        }

        if(this.state.str==".")
        {
            this.setState({str:"0."})
        }

        if(this.state.str=="0"){
            await this.setState({str:valBtn})
        }
        else{
            await this.setState({str:this.state.str+valBtn.toString()}) 
        }

        this.setState({str:this.state.str.toString().replace("*+","+")})
        this.setState({str:this.state.str.toString().replace("-*","*")})
        this.setState({str:this.state.str.toString().replace("+*","*")})
        this.setState({str:this.state.str.toString().replace("/*","*")})
        this.setState({str:this.state.str.toString().replace("*/","/")})
        this.setState({str:this.state.str.toString().replace("+/","/")})
        this.setState({str:this.state.str.toString().replace("-/","/")})
        this.setState({str:this.state.str.toString().replace("/+","+")})
        this.setState({str:this.state.str.toString().replace("++","+")})
        this.setState({str:this.state.str.toString().replace("--","-")})
        this.setState({str:this.state.str.toString().replace("//","/")})
        this.setState({str:this.state.str.toString().replace("**","*")})
        this.setState({str:this.state.str.toString().replace("+-","-")})
        this.setState({str:this.state.str.toString().replace("-+","+")})
        
        

        if(valBtn!="+"&&valBtn!="-"&&valBtn!="*"&&valBtn!="/"&&valBtn!="="){
            if(valBtn=="ac"){
                this.setState({str:"0",strPhp:"",operation:"",nbVirguleInOPerande:0})
            }
            else{
                if(this.state.displayRes){
                    if(valBtn==0){
                        this.setState({str:"0",strPhp:""})
                    }
                    else{
                        this.setState({str:valBtn,strPhp:valBtn})
                    }
                    
                    this.setState({nbVirguleInOPerande:0,displayRes:false,operation:""})
                }
                else{
                    this.setState({strPhp:this.state.strPhp+valBtn.toString()})
                } 
            }
        }
        else{
            this.setState({nbVirguleInOPerande:0, displayRes:false})
            if(valBtn!="="){
                this.setState({strPhp:this.state.strPhp+"#"+valBtn+"#"})
                this.setState({strPhp:this.state.strPhp.toString().replace("*##+","+")})
               
                this.setState({strPhp:this.state.strPhp.toString().replace("-##*","*")})
                this.setState({strPhp:this.state.strPhp.toString().replace("+##*","*")})
                this.setState({strPhp:this.state.strPhp.toString().replace("/##*","*")})
                this.setState({strPhp:this.state.strPhp.toString().replace("*##/","/")})
                this.setState({strPhp:this.state.strPhp.toString().replace("+##/","/")})
                this.setState({strPhp:this.state.strPhp.toString().replace("-##/","/")})
                this.setState({strPhp:this.state.strPhp.toString().replace("/##+","+")})
                this.setState({strPhp:this.state.strPhp.toString().replace("+##+","+")})
                this.setState({strPhp:this.state.strPhp.toString().replace("-##-","-")})
                this.setState({strPhp:this.state.strPhp.toString().replace("/##/","/")})
                this.setState({strPhp:this.state.strPhp.toString().replace("*##*","*")})
                this.setState({strPhp:this.state.strPhp.toString().replace("+##-","-")})
                this.setState({strPhp:this.state.strPhp.toString().replace("-##+","+")})

                console.log(this.state.strPhp)
            }
            else{
                console.log(this.state.strPhp)
                this.sendOperation(this.state.strPhp)
            }
        }

    }

    async sendOperation(strPhp){      
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: strPhp })
        };
        const response= await fetch(URL_API2, requestOptions)
            const res = await response.json();
            console.log('res',res.value)
            this.setState({ operation:this.state.str,value: res.value,str:res.value,strPhp:res.value,displayRes:true})
    }

    render(){
        return(<div className={this.props.style}>
            <Input style="bloc1" style2="input1" operation={this.state.operation} value={this.state.str} />
            <div className="top"><Button handler={()=>this.handleBtn(7)} value="7" style="button1" /><Button handler={()=>this.handleBtn(8)} value="8" style="button1" /><Button handler={()=>this.handleBtn(9)} value="9" style="button1" /><Button handler={()=>this.handleBtn("/")} value="/" style="button4" /></div>
            <div className="top"><Button handler={()=>this.handleBtn(4)} value="4" style="button1" /><Button handler={()=>this.handleBtn(5)} value="5" style="button1" /><Button handler={()=>this.handleBtn(6)} value="6" style="button1" /><Button handler={()=>this.handleBtn("*")} value="*" style="button4" /></div>
            <div className="top"><Button handler={()=>this.handleBtn(1)} value="1" style="button1" /><Button handler={()=>this.handleBtn(2)} value="2" style="button1" /><Button handler={()=>this.handleBtn(3)} value="3" style="button1" /><Button handler={()=>this.handleBtn("-")} value="-" style="button4" /></div>
            <div className="top"><Button handler={()=>this.handleBtn(0)} value="0" style="button1" /><Button handler={()=>this.handleBtn(".")} value="." style="button1" /><Button handler={()=>this.handleBtn("ac")} value="ac" style="button3" /><Button handler={()=>this.handleBtn("+")} value="+" style="button4" /></div>
            <div className="top"><Button handler={()=>this.handleBtn("=")} value="=" style="button2" /></div>
        </div>)
    }
    
}

export default Container