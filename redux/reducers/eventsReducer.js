const InitialState = {
    loading: true,
    error: false
}

export const eventsReducer = (state = InitialState, action) => {
    // console.log(action.payload);
    switch(action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: false
            }
        case 'ERROR_MESSAGE':
            return {
                ...state,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}