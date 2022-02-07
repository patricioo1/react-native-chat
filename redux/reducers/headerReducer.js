import * as actionTypes from './../actions/actions'

const InitialState = {
    visible: false
}

export const headerReducer = (state = InitialState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HEADER:
            return {
                ...state,
                visible: !state.visible
            }
        default:
            return {
                ...state
            }
    }
}