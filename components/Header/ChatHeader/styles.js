import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 44,
      paddingHorizontal: 16,
    },
    profileInfoWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 44,
      width: 193
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
      fontWeight: 700,
      fontFamily: 'Poppins-Regular.ttf',
      color: '#5603AD'
    },
    arrowBack: {
      width: 8,
      height: 16,
      marginRight: 18
    },
    activeNow: {
      color: 'white'
    },
    distanceBetween: {
      marginLeft: 12
    }
  })

  export default styles;