import React, { useEffect, useMemo, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_ROOM } from '../../../GraphQL/queries/queries';
import SendingMessage from './SendingMessage/SendingMessage';
import Loading from '../../Statuses/Loading/Loading';
import Error from '../../Statuses/Error/Error';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './../../../redux/actions/actions'
import dayjs from 'dayjs';
import styles from './styles';

const SingleChatRoom = () => {
  const roomId = useSelector(state => state.rooms.roomId)

  const { loading, error, data } = useQuery(GET_SINGLE_ROOM, {
    variables: {
      roomId: roomId
    },
    notifyOnNetworkStatusChange: true,
    // pollInterval: 10000
  })

  const messages = data ? data.room.messages : null;
  const scrollViewRef = useRef();
  const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'
  const dispatch = useDispatch();

  const checkUser = () => {
    if (messages) {
    messages.forEach(message => {
      const user = message.user.firstName
      if (user !== 'Newt') {
        dispatch(selectUser(user))
      }
    })}
  }

  useEffect(() => {
    checkUser();
  }, [dispatch, messages])

  const sortedMessages = useMemo(() => {
    if(!messages) {
    return [];
    } else {
     return [...messages].sort((a, b) => dayjs(a.insertedAt, DATE_FORMAT) > dayjs(b.insertedAt, DATE_FORMAT) ? 1 : -1)
    }
  }, [messages])

  if(loading) return <Loading />
  if(error) return <Error />
    return (
      <View style={styles.singleChatWrapper}>
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}} ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
          {sortedMessages.map(message => {
            if (message.user.firstName !== 'Newt') {
              return (
                <View key={message.id} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                <Text style={styles.textMessageGuest}>{message.body}</Text>
                </View>
              )
            } else
            return (
              <View key={message.id} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <Text style={styles.textMessage}>{message.body}</Text>
              </View>
              )
            })}
        </ScrollView>
        <SendingMessage />
      </View>
    );
};

export default SingleChatRoom;