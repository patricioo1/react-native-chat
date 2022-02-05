import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native'
import { GET_ROOMS } from '../../queries/queries';
import { useDispatch } from 'react-redux';
import Error from '../EventHandlings/Error';

const Rooms = () => {
    const [errorMessage, setErrorMessage] = useState(false)
    const { loading, error, data } = useQuery(GET_ROOMS);
    const rooms = data ? data.usersRooms.rooms : null;
    const user = data ? data.usersRooms.user : null;
    console.log(user);
    console.log(rooms);
    const dispatch = useDispatch()


    if (loading) return <ActivityIndicator size='large' style={styles.spinner} />
    if (error) return <Error />

    return (
      <View style={styles.container}>
        {rooms.map(room => {
            return (
                <View key={room.id}>
                    <Text>{room.name}</Text>
                </View>
            )
        })}
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        textAlign: 'center',
        width: '100%',
        backgroundColor: 'pink'
    },
    text: {
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    spinner: {
        width: '100%',
        flex: 1,
    },
    errorMessage: {
        width: '100%',
        height: '100%'
    }
})

export default Rooms;