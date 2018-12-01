import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        width: '100%',
        height:'100%'
    },
    smallContrainer:{
        width: "100%", 
        height: "100%", 
        marginTop: 10, 
        paddingLeft: 20, 
        paddingRight: 20,
        flexDirection: 'column'
    },
    contentBox:{
        width: "100%",
        borderColor: "#f3f5fa",
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 10,
    },
    title: { 
        width: "100%", 
        paddingBottom: 5,
    },
    content: {
        width: "100%", 
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTitle: {
        color: "#aab0be",
        fontSize: 10
    },
    textContent: {
        fontSize: 14,
    },
    statusBox: {
        width: 15, 
        height:15, 
        backgroundColor: "red", 
        borderRadius: 7.5,
        opacity: 1,
    },
    statusBoxAlt: {
        width: 15, 
        height:15, 
        backgroundColor: "blue", 
    }
})