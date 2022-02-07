import React from 'react';
import { useQuery } from '@apollo/client';
import { View } from 'react-native'
import { GET_ROOMS } from '../../GraphQL/queries/queries';
import Error from '../Statuses/Error/Error';
import Loading from '../Statuses/Loading/Loading';
import RoomPreview from './RoomPreview/RoomPreview';
import styles from './styles';

const Rooms = ({ navigation }) => {
    const { loading, error, data, refetch } = useQuery(GET_ROOMS);
    const rooms = data ? data.usersRooms.rooms : null;

    if (loading) return <Loading />
    if (error) return <Error />
    return (
        <View style={styles.container}>
        {rooms.map(room => {
        return <RoomPreview key={room.id} room={room} navigation={navigation} refetch={refetch} />
        })}
    </View>
    );
};

export default Rooms;