import React from 'react';
import { StatusBar, View } from "react-native";
import RoomsHeader from './RoomsHeader/RoomsHeader';
import ChatHeader from './ChatHeader/ChatHeader';
import { useSelector } from 'react-redux';
import styles from './styles';

const Header = ({ navigation }) => {
    const visible = useSelector(state => state.header.visible)

    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        {visible ? <ChatHeader navigation={navigation} /> : <RoomsHeader />}
      </View>
    );
};

export default Header;