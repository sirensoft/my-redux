import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from  'redux-thunk';

import  reducers  from './combineReducer' 

let middleWare = applyMiddleware(thunk) ;

export default createStore(reducers,middleWare);