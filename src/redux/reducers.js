import { GET_MARKET_CAP, GET_COINS_BY_MARKET_CAP } from './actions'

const initialState = {
  darkTheme: false,
  totalMarketCap: 0,
  coins: [],
}

// reducer
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MARKET_CAP:
      return { ...state, totalMarketCap: action.payload }
    case GET_COINS_BY_MARKET_CAP:
      return { ...state, coins: action.payload }
    default:
      return state
  }
}

