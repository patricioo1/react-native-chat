import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    sendMessageWrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 102,
        backgroundColor: '#B6DEFD',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: 41,
        marginTop: 16
    },
    input: {
        width: 287,
        height: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 12,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        borderColor: '#5603AD',
        borderWidth: 2
    },
    arrowIcon: {
        width: 34.14,
        height: 34.14
    }
})

export default styles;