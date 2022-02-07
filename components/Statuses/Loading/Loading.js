import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './styles'

const Loading = () => {
    return (
      <ActivityIndicator size='large' style={styles.spinner} />
    );
};

export default Loading;