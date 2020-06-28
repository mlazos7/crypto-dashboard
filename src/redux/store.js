import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {appReducer} from './reducers'

//setting extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const generateStore = () => {

    const rootReducer = combineReducers({
        crypto: appReducer
      })

    return createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
}

export default generateStore;