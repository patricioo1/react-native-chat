import React, { useState } from 'react';
import { View, StyleSheet, Text } from "react-native";
import RoomsHeader from './RoomsHeader/RoomsHeader';
import ChatHeader from './ChatHeader/ChatHeader';

const Header = () => {
    const [chat, setChat] = useState(false);

    return (
      <View style={styles.container}>
        {!chat ? <RoomsHeader/> : <ChatHeader/>}
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: 92,
        width: '100%',
        backgroundColor: '#B6DEFD',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24
    }
})

export default Header;