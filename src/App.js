import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from './store';

import Diag from './components/Diag'
import ShowDiag from './components/ShowDiag'

class App extends Component {

  render() {
    // force re-render using mutation event in store
    store.subscribe(() => {
      console.log('Subscribe',store.getState())
      this.setState({update: ''})
    })

    return (
      <div>
        <Diag/>
        <ShowDiag data={this.props.dx}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {dx: state.dx}
}

export default connect(mapStateToProps)(App);
