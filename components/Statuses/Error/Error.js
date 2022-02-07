import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles';

const Error = () => {

    return (
      <View style={styles.container}>
        <Text style={styles.errorMessage}>
            Sorry, we couldn't fech your data...
        </Text>
      </View>
    );
};

export default Error;