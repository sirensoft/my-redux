import React, {Component} from 'react';
import {connect} from 'react-redux';


class Diag extends Component {
    constructor(props){
        super(props)
        this.state = {
            code: '',
            name: ''
          }
         
    }
    componentDidMount(){
        this.refs.code.focus();
    }
  

  onChange=(e)=>{     
        this.setState({
            [e.target.name]:e.target.value
        })
  }

  onSubmit=(e)=>{
    e.preventDefault();
    this.props.Add({
        code:this.state.code,
        name:this.state.name       
    })
    this.setState({
       code:'',
       name:''
    })
    this.refs.code.focus();
    
  }

  

  render() {
   
    return (
    <div>
        <form onSubmit={this.onSubmit}>
          <input ref='code' name='code' onChange={this.onChange} value={this.state.code}/>
          <input name='name' onChange={this.onChange} value={this.state.name}/>
          <button>OK</button>
        </form>   
        
    </div>
    );

  }
}
const mapStateToProps = (state)=>{
    return {
      dx:state.dx
    }
  }

  const mapDispatchToProps =(dispatch)=>{
    return{
        Add:(payload)=>{
            dispatch({
                type:"DxAdd",
                payload:payload
            })
        }
      
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Diag);