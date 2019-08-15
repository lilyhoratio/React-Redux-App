import axios from 'axios'

export const FETCH_WEATHER_DATA_START = "FETCH_WEATHER_DATA_START";
export const FETCH_WEATHER_DATA_SUCCESS = "FETCH_WEATHER_DATA_SUCCESS";
export const FETCH_WEATHER_DATA_FAILURE = "FETCH_WEATHER_DATA_FAILURE";

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_WEATHER_DATA_START });
        // axios.get("https://api.darksky.net/forecast/8d3c118f3309dd6930925ac68cc42c84/37.8267,-122.4233, , {
        // headers: {
        //         'Access-Control-Allow-Origin': '*',
        //     }
        // })
        axios.get("https://random.dog/woof.json")
            .then(res => {
                console.log("API response", res.data.url)
                // dispatch({ type: FETCH_WEATHER_DATA_SUCCESS, payload: res.data }) //weather
                dispatch({ type: FETCH_WEATHER_DATA_SUCCESS, payload: res.data.url })
            })
            .catch(err => {
                dispatch({ type: FETCH_WEATHER_DATA_FAILURE, payload: err.response })
            })
    }
}