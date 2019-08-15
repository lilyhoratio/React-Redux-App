const initialState = {
    weather: {

    },
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    // on initial load, redux calls reducer once with random string for action.type
    switch (action.type) {

        default:
            return state;
    }
}