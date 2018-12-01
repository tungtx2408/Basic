import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafbfc",
    },
    flatlist: {
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    imgContainer: {
        marginRight: 15,
    },
    imgBig: {
        width: 80,
        height: 80,
        borderRadius: 999,
        borderColor: 'darkgrey',
        borderWidth: 2,
    },
    imgBigFix:{
        width: 40,
        height: 80,
    },
    imgSmall: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 40,
        height: 40,
        borderRadius: 999,
        borderColor: 'darkgrey',
        borderWidth: 2,
    },
    imgSmallFix:{
        position: 'relative',
        top: 0,
        right: 0,
        width: 40,
        height: 40,
        borderRadius: 999,
        borderColor: 'darkgrey',
        borderWidth: 2,
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
    },
    textHead: {
        marginBottom: 5,
    },
    textGrey: {
        color: 'grey',
    },
    textBlack: {
        color: 'black',
        lineHeight: 23
    },
    textBottom: {
        flexDirection: 'row'
    },
    icon: {
        marginRight: 5
    },
})