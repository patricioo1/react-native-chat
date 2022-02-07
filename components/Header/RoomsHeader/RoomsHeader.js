import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';

const RoomsHeader = () => {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Rooms</Text>
        <View style={styles.iconsWrapper}>
          <Image style={styles.singleIcon} source={require('./../../../assets/images/search.svg')}/>
          <Image style={styles.singleIcon} source={require('./../../../assets/images/rooms.svg')}/>
        </View>
      </View>
    );
};

export default RoomsHeader;