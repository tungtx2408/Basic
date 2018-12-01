import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default class NewFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    date: 'November 22nd, 2018',
                    img: 'https://images4.alphacoders.com/826/thumb-1920-82604.jpg',
                    time: '9',
                    name: 'Emma Watson',
                    justnow: 'Just now',
                    content: "I'm Emma Watson and i just bought Overwatch with the price cheaper than ever!!!",
                },
                {
                    date: 'November 22nd, 2018',
                    img: 'https://images4.alphacoders.com/826/thumb-1920-82604.jpg',
                    time: '9',
                    name: 'Emma Watson',
                    justnow: 'Just now',
                    content: "I'm Emma Watson and i just bought Overwatch with the price cheaper than ever!!!",
                },
                {
                    date: 'November 22nd, 2018',
                    img: 'https://images4.alphacoders.com/826/thumb-1920-82604.jpg',
                    time: '9',
                    name: 'Emma Watson',
                    justnow: 'Just now',
                    content: "I'm Emma Watson and i just bought Overwatch with the price cheaper than ever!!!",
                },
            ]
        }
    }

    _renderItems = ({ item, index }) => (
        <View>
            {/* 1*/}
            <View style={styles.contentConteainer}>
                <View style={styles.headContainerLeft}>
                    <Image style={styles.img} source={{ uri: item.img }}></Image>
                    <View style={styles.timeContainer}>
                        <Icon style={styles.icon} name='clock' color='#00bee2' size={20}></Icon>
                        <Text style={styles.contentTextRight}>{item.time}m ago</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text>{item.name}</Text>
                    <Text style={styles.contentTextLeft}>{item.content}</Text>
                </View>
            </View>
            <View style={styles.bottomBorderContainerLeft}><View style={styles.bottomBorder}></View></View>
            <View style={styles.contentConteainer}>
                <View style={styles.headContainerRight}>
                    <Image style={styles.img} source={{ uri: item.img }}></Image>
                    <View style={styles.timeContainer}>
                        <Icon style={styles.icon} name='clock' color='#00bee2' size={20}></Icon>
                        <Text style={styles.contentTextLeft}>{item.time}m ago</Text>
                    </View>
                </View>
                <View style={styles.bottomContainerRight}>
                    <Text>{item.name}</Text>
                    <Text style={styles.contentTextRight}>{item.content}</Text>
                </View>
            </View>
            <View style={styles.bottomBorderContainerRight}><View style={styles.bottomBorder}></View></View>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dateContainer} >
                    <Text style={styles.dateText} /*data={this.state.data}*/>
                        {/* {item.date} */}
                        November 22nd, 2018
                    </Text>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItems}
                    keyExtractor={(item, index) => index.toString()}>
                </FlatList>
            </View>
        )
    };
}
