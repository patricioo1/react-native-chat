import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    singleMessageWrapper: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 89,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        marginVertical: 12
    },
    time: {
        position: 'absolute',
        top: 8,
        right: 16,
        fontSize: 13,
        color: '#9FA2B2'
    },
    profileIcon: {
        width: 64,
        height: 64,
        marginHorizontal: 16
    },
    textWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    textTitle: {
        fontFamily: 'Poppins-Regular.ttf',
        fontSize: 15,
        lineHeight: 20,
        fontWeight: 500,
        maxWidth: 250
    },
    textContent: {
        fontSize: 14,
        fontWeight: 400,
        maxWidth: 250
    }
})

export default styles;