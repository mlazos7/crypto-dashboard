import axios from 'axios'

// actions types
export const GET_MARKET_CAP = 'GET_MARKET_CAP';

// actions creator
export const getMarketCap = () => async (dispatch) => {
    try {

        const res = await axios.get('https://api.coingecko.com/api/v3/global')
        
        dispatch({
            type: GET_MARKET_CAP,
            payload: res.data.data.total_market_cap.usd
        })
    }
    catch (error) {
        console.error(error)
    }
}