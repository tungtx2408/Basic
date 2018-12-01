
import { StyleSheet, Dimensions } from "react-native";
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafbfc"
    },
    box: {
        width: "100%",
        flexDirection: "row",
    },
    ImageRight: {
        width: "25%",
        flexDirection: 'row',
        margin: 15,
    },
    ImageRightSmall: {
        width: "20%",
        flexDirection: 'row',
        // margin: 15,
        padding: 15

    },
    ImageRight2Small: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    ImageRight1: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    Img: {
        width: 70,
        height: 70,
        borderRadius: 35,
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        top: 15,
        right: 16,
    },
    ImageRight2: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#949fab",
        position: "absolute",

        right: 1
    },

    TextLeft: {
        width: "65%",
        marginTop: 25,
    },

    TextBlue: {
        color: "#77cdeb"
    },
    TextGray: {
        padding: 5,
        color: "#afb8c0"
    },
    TextBlack: {
        fontStyle: 'normal',
        color: "black",
    },
    Icon: {
        marginTop: 10,
        flexDirection: "row",
    },
    img: {
        width: 25,
        height: 25
    },
    boderBottom: {
        marginTop: 10,
        borderRadius: 4,
        borderBottomWidth: 0.5,
        borderColor: 'black',
        width: "100%"
    }


})
export default Styles;