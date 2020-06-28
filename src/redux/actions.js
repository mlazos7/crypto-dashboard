import axios from 'axios'

// actions types
export const GET_GLOBAL_DATA = 'GET_GLOBAL_DATA';

// actions creator
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