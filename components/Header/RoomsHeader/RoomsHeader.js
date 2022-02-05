import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    paddingHorizontal: 16
  },
  iconsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%',
    width: 100,
  },
  singleIcon: {
    width: 44,
    height: 44
  },
  text: {
    fontSize: 28,
    fontWeight: 700,
    fontFamily: 'Poppins-Regular.ttf',
    color: '#5603AD'
  }
})

export default RoomsHeader;