import { combineReducers } from 'redux'
import { headerReducer } from './headerReducer'
import { roomsReducer } from './roomsReducer'

export const rootReducer = combineReducers({
    header: headerReducer,
    rooms: roomsReducer
})