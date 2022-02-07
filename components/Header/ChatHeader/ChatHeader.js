import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeader } from './../../../redux/actions/actions'
import styles from './styles';

const ChatHeader = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.rooms.user)

    return (
      <View style={styles.container}>
        <View style={styles.profileInfoWrapper}>
          <TouchableOpacity onPress={() => {navigation.navigate('Rooms'); dispatch(changeHeader())}}>
          <Image style={styles.arrowBack} source={require('./../../../assets/images/arrowback.svg')}/>
          </TouchableOpacity>
          <Image style={styles.singleIcon} source={require('./../../../assets/images/profile.svg')} />
          <View style={styles.distanceBetween}>
          <Text style={styles.text}>{user ? user : null}</Text>
          <Text style={styles.activeNow}>Active now</Text>
          </View>
        </View>
        <View style={styles.iconsWrapper}>
          <Image style={styles.singleIcon} source={require('./../../../assets/images/phone.svg')}/>
          <Image style={styles.singleIcon} source={require('./../../../assets/images/videocall.svg')}/>
        </View>
      </View>
    );
};

export default ChatHeader;