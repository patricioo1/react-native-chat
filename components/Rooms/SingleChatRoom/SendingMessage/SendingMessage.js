import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Keyboard } from 'react-native';
import Loading from '../../../Statuses/Loading/Loading';
import {SEND_MESSAGE} from '../../../../graphql/mutations/mutations'
import { useSelector } from 'react-redux';
import { GET_SINGLE_ROOM } from '../../../../GraphQL/queries/queries';
import styles from './styles'

const SendingMessage = () => {
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false)
    const [sendMessage, {data, loading, error}] = useMutation(SEND_MESSAGE, {
        refetchQueries: [
            GET_SINGLE_ROOM,
            'GetSingleRoom'
        ]
    });

    const roomId = useSelector(state => state.rooms.roomId);

    if(loading) return <Loading />
    return (
      <View style={styles.sendMessageWrapper}>
        <View style={styles.inputWrapper}>
            <TextInput onFocus={() => setFocus(true)} style={styles.input} onChangeText={(e) => setValue(e)} onSubmitEditing={() => {
                setValue('')
            }} />
            <TouchableOpacity disabled={!value} onPress={() => {setValue(''); sendMessage({ variables: { body: value, roomId: roomId }})}}>
            <Image source={require('./../../../../assets/images/send.svg')} style={styles.arrowIcon} />
            </TouchableOpacity>
        </View>
      </View>
    );
};

export default SendingMessage;