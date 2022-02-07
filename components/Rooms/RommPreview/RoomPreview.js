import { useQuery } from '@apollo/client';
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux';
import { GET_SINGLE_ROOM_MESSAGES } from '../../../GraphQL/queries/queries';
import { changeHeader, selectSingleRoomId } from '../../../redux/actions/actions';
import dayjs from 'dayjs';
import styles from './styles';
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

const RoomPreview = ({ room, navigation, refetch }) => {
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(GET_SINGLE_ROOM_MESSAGES, {
        variables: {
            roomId: room.id
        }
    })

    const lastMessage = data ? data.room.messages : null;
    const lastItem = lastMessage ? lastMessage[0] : null

    return (
    <TouchableOpacity key={room.id} style={styles.singleMessageWrapper} onPress={() => {navigation.navigate('SingleChatRoom'); dispatch(changeHeader()); dispatch(selectSingleRoomId(room.id)); refetch()}}>
        {lastMessage ? <Text style={styles.time}>{dayjs().to(dayjs(lastItem.insertedAt))}</Text> : null}
        <Image source={require('./../../../assets/images/profile.svg')} style={styles.profileIcon}/>
        <View style={styles.textWrapper}>
        <Text style={styles.textTitle} numberOfLines={1}>{room.name}</Text>
        {lastMessage ? <Text numberOfLines={1} style={styles.textContent}>{lastItem.body}</Text> : null}
        </View>
    </TouchableOpacity>
    );
};

export default RoomPreview;