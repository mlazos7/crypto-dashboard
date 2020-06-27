import axios from 'axios'

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

// constant
const GET_GLOBAL_DATA = 'GET_GLOBAL_DATA';

// redures
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GLOBAL_DATA:
      return { ...state, globalData: action.payload }
    default:
      return state
  }
}

// actions
export const getGlobalData = () => async (dispatch) => {
  try {
    const res = await axios.get('https://api.coingecko.com/api/v3/global')
    dispatch({
      type: GET_GLOBAL_DATA,
      payload: res.data.data
    })
  }
  catch (error) {
    console.error(error)
  }
}