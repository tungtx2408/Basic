import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,
    },
    dateContainer: {
        width: '100%',
        marginBottom: 20,
        marginHorizontal: 20,
    },
    contentConteainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    headContainerLeft: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    headContainerRight: {
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
    },
    icon:{
        marginRight: 10,
    },
    timeContainer:{
        flexDirection: 'row',
    },
    bottomContainerLeft: {
        width:'100%',
        alignItems: 'flex-start'
    },
    bottomContainerRight: {
        width:'100%',
        alignItems: 'flex-end',
    },
    bottomBorder: {
        width: '45%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        marginBottom: 20,
    },
    bottomBorderContainerRight:{
        width: '100%',
        alignItems: 'flex-end'
    },  
    dateText: {
        fontSize: 18,
        color: 'lightgrey'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    nameText: {
        marginBottom: 5
    },
    contentTextLeft: {
        color: 'grey',
        textAlign: 'left'
    },
    contentTextRight: {
        color: 'grey',
        textAlign: 'right'
    },
})