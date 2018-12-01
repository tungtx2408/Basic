import React, { Component } from 'react';
import {
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import styles from './styles';

const myButton = (
    <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
        Login with Facebook
    </Icon.Button>
);

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: "http://images6.fanpop.com/image/photos/36800000/Emma-Watson-have-fun-36861904-2494-1663.jpg",
            name: "Emma Watson",
            location: 'Hoa Kì',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContent}>
                    <View style={styles.imgHolder}>
                        <Image source={{ uri: this.state.img }} style={styles.img} />
                        <View style={styles.statusCircle}><Icon name="plus" size={15} color='#fff'></Icon></View>
                    </View>
                    <Text style={styles.headerText}>{this.state.name}</Text>
                    <Text style={styles.texts}>{this.state.location}</Text>
                </View>
                <View style={styles.touchableContainer}>
                    <TouchableOpacity style={styles.touchableContent}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.circle}></View>
                            <Text style={styles.texts}>Thông tin</Text>
                        </View>
                        <View><Icon name='chevron-thin-right' size={15} color='#9ea6b5'></Icon></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableContent}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.circle}></View>
                            <Text style={styles.texts}>Tôi là</Text>
                        </View>
                        <View><Icon name='chevron-thin-right' size={15} color='#9ea6b5'></Icon></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableContent}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.circle}></View>
                            <Text style={styles.texts}>Tìm kiếm</Text>
                        </View>
                        <View><Icon name='chevron-thin-right' size={15} color='#9ea6b5'></Icon></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableContent}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.circle}></View>
                            <Text style={styles.texts}>Quan trọng</Text>
                        </View>
                        <View><Icon name='chevron-thin-right' size={15} color='#9ea6b5'></Icon></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touchableContent, {borderBottomWidth: 0}]}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.circle}></View>
                            <Text style={styles.texts}>Về nameapp</Text>
                        </View>
                        <View><Icon name='chevron-thin-right' size={15} color='#9ea6b5'></Icon></View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
}