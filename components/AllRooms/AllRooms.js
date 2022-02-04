import { StyleSheet, Text, View } from 'react-native'

const Rooms = () => {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>It's stupid simple!</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        textAlign: 'center',
        backgroundColor: 'blue',
        width: '100px',
        height: '50px'
    },
    text: {
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default Rooms;