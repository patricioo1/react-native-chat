import { View, StyleSheet, Text } from "react-native";
import SearchIcon from './../../assets/images/search.svg'

const Header = () => {
    return (
      <View style={styles.container}>
          <Text>Rooms</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 92,
        width: '100%',
        backgroundColor: '#B6DEFD',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24
    }
})

export default Header;