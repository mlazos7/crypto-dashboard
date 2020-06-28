import axios from 'axios'

// actions types
export const GET_MARKET_CAP = 'GET_MARKET_CAP';
export const GET_TOP4_BY_MARKET_CAP = "GET_TOP4_BY_MARKET_CAP"
export const ERROR_API = "ERROR_API"

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

export const getTop4ByMarketCap = () => async (dispatch) => {
    try {
        // let config = {
        //     headers: {
        //         vs_currency: 'usd',
        //         order: 'market_cap_desc',
        //         per_page: 4
        //     }
        // }
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?order=market_cap_desc&vs_currency=usd&per_page=4')

        dispatch({
            type: GET_TOP4_BY_MARKET_CAP,
            payload: res.data
        })
    } catch (error) {

        console.error(error.toJSON())
        dispatch({
            type: ERROR_API,
            payload: error.toJSON().message
        })

    }
}