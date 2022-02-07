import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    singleChatWrapper: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    textMessage: {
      width: 245,
      height: 'auto',
      backgroundColor: '#993AFC',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 12,
      padding: 12,
      marginVertical: 6,
      color: 'white',
      marginRight: 24,
    },
    textMessageGuest: {
      width: 245,
      height: 'auto',
      backgroundColor: '#FFF',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
      borderBottomLeftRadius: 0,
      padding: 12,
      marginVertical: 6,
      color: 'black',
      marginLeft: 24,
    }
  })

  export default styles;