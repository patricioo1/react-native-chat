import { createAction } from '@reduxjs/toolkit';

export const CHANGE_HEADER = 'CHANGE_HEADER';
export const SELECT_SINGLE_ROOM_ID = 'SELECT_SINGLE_ROOM_ID';
export const SELECT_USER = 'SELECT_USER';

export const changeHeader = createAction(CHANGE_HEADER);
export const selectSingleRoomId = createAction(SELECT_SINGLE_ROOM_ID);
export const selectUser = createAction(SELECT_USER);