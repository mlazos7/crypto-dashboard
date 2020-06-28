import {GET_MARKET_CAP} from './actions'

const initialState = {
  darkTheme: false,
  totalMarketCap: 0,
  globalData: [],
  topCrypto: [{
    name: '',
    ticker: '',
    price: 0,
    dayChange: 0
  }]
}

// reducer
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MARKET_CAP:

      return { ...state, totalMarketCap: formatter.format(action.payload) }
    default:
      return state
  }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})