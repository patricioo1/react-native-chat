import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Error = () => {

    return (
      <View style={styles.container}>
        <Text style={styles.errorMessage}>
            Sorry, we couldn't fech your data...
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    errorMessage: {
        fontFamily: 'Poppis-Regular.ttf',
        fontSize: 18
    }
})

export default Error;