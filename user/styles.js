import {
    StyleSheet,
    Dimensions
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    headerContent: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#dde9ff',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
    imgHolder: {
        marginBottom: 20,
        alignItems: 'flex-end'
    },
    img: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
    },
    statusCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#c0c8d6',
        position: 'absolute',
        bottom: 5,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#343d51',
        marginBottom: 15
    },
    texts: {
        fontSize: 16,
        color: '#4e5868',
        bottom: 2
    },
    touchableContainer: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 25,
        paddingRight: 25,
    },
    circle:{
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#828da0',
        marginRight: 15,
    },
    touchableContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomColor: '#dde9ff',
        borderBottomWidth: 1,
    }
})