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

        default:
            return state;
    }
}