import {
    FETCH_WEATHER_DATA_START,
    FETCH_WEATHER_DATA_SUCCESS,
    FETCH_WEATHER_DATA_FAILURE,
} from '../actions'

const initialState = {
    weatherData: {

    },
    isLoading: false,
    error: '',
    test: 'Working!'
}

export const reducer = (state = initialState, action) => {
    // on initial load, redux calls reducer once with random string for action.type
    switch (action.type) {
        case FETCH_WEATHER_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                weatherData: action.payload,
                error: ''
            };

        default:
            return state;
    }
}