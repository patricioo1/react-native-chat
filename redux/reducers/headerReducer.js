import * as actionTypes from './../actions/actions'

const InitialState = {
    chatHeader: false
}

export const headerReducer = (state = InitialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HEADER:
            return {
                ...state,
                chatHeader: !state.chatHeader
            }
        default:
            return {
                ...state
            }
    }
}