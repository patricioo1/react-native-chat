import * as actionTypes from './../actions/actions'

const InitialState = {
    roomId: [],
    user: '',
    allId: []
}

export const roomsReducer = (state = InitialState, action) => {
    console.log(action.payload);
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
        case actionTypes.SELECT_ALL_ID:
            return {
                ...state,
                allId: action.payload
            }
        default:
            return {
                ...state
            }
    }
}