import {GET_GLOBAL_DATA} from './actions'

const initialState = {
  darkTheme: false,
  globalData: [],
  topCrypto: [{
    name: '',
    ticker: '',
    price: 0,
    dayChange: 0
  }]
}

// redures
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GLOBAL_DATA:
      return { ...state, globalData: action.payload }
    default:
      return state
  }
}
