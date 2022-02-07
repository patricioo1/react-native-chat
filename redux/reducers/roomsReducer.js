import * as actionTypes from './../actions/actions'

const InitialState = {
    roomId: [],
    user: '',
    isMessages: false
}

export const roomsReducer = (state = InitialState, action) => {
    switch(action.type) {
        case actionTypes.SELECT_SINGLE_ROOM_ID:
            return {
                ...state,
                roomId: action.payload,
            }
        case actionTypes.SELECT_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return {
                ...state
            }
    }
}