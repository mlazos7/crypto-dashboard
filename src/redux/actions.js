import axios from 'axios'

// actions types
export const GET_MARKET_CAP = 'GET_MARKET_CAP';
export const GET_COINS_BY_MARKET_CAP = 'GET_COINS_BY_MARKET_CAP'
export const ERROR_API = 'ERROR_API'
export const CHANGE_THEME = 'CHANGE_THEME'

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

export const getCoins = () => async (dispatch) => {
    try {
        let config = {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 100
            }
        }
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets',config)

        dispatch({
            type: GET_COINS_BY_MARKET_CAP,
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

export const changeTheme = (dispatch, getState) => {

    const {theme}  = getState().crypto;

    dispatch({
        type: CHANGE_THEME,
        value: !theme
    })
}

