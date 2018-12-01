import React, { Component } from 'react';
import {
    StyleSheet,
    PropTypes,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";
// import styles from "./styles"

export default class TestChangeStyle extends Component {
    constructor(props){
        super(props);
        this.state = {
          onClicked: false
        }
        this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);
      }
      handlerButtonOnClick(){
        this.setState({
           onClicked: !this.state.onClicked
        });
      }
      render() {
        var _style;
        if (this.state.onClicked){ // clicked button style
          _style = {
              color: "red"
            }
        }
        else{ // default button style
          _style = {
              color: "blue"
            }
        }
        return (
            <View>
                <TouchableOpacity
                    onPress={this.handlerButtonOnClick}
                    ><Text style={_style}>Press me !</Text></TouchableOpacity>
            </View>
        );
      }
}