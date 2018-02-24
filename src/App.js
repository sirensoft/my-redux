import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from './store';

import Diag from './components/Diag'
import ShowDiag from './components/ShowDiag'


class App extends Component {

  constructor(props){
    super(props)
    this.state={
      dx:[]
    }
    store.subscribe(()=>{
      this.setState({
        dx:store.getState().dx
      })
    })
         
  }
    
 

    
  render() {       
   
    return (      
      <div>
      <Diag/>
      <ShowDiag data={this.props.dx} />
        
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  return {
    dx:state.dx
  }
}



export default connect(mapStateToProps)(App);
