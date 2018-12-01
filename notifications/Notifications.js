import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    name: "Emma Watson",
                    invited: "Summer Cool Party Awesome!!!",
                    add: "",
                    commentedOnProject: "",
                    commentText: "",
                    justnow: "Just now",
                    timeMinutes: "",
                    timeHours: "",
                    timeDates: "",
                    timeFull: "",
                    imgBig: "http://www.resimrehberi.com/files/file/welcome-wallpaper.jpg",
                    imgSmall: "https://i.pinimg.com/originals/0c/7b/2d/0c7b2d1c5e4c7f7d83e144b2a045bc87.jpg",
                    ago: "",
                    statusText: 'invited you on'
                },
                {
                    id: '2',
                    name: "Emma Stone",
                    invited: "",
                    add: "WorkEvo",
                    commentedOnProject: "",
                    commentText: "",
                    justnow: "",
                    timeMinutes: "15",
                    timeHours: "",
                    timeDates: "",
                    timeFull: "",
                    imgBig: "none",
                    imgSmall: "http://www.profilesbychris.com/wp-content/uploads/2012/03/emma-stone.jpg",
                    ago: "ago",
                },
                {
                    id: '3',
                    name: "Emma Watson",
                    invited: "Summer Party",
                    add: "WorkEvo",
                    commentedOnProject: "WorkEvo",
                    commentText: "You suck!!!",
                    justnow: "Just now",
                    timeMinutes: "10",
                    timeHours: "1",
                    timeDates: "2",
                    timeFull: "6:09 pm Nov 17, 2018",
                    imgBig: "http://www.resimrehberi.com/files/file/welcome-wallpaper.jpg",
                    imgSmall: "https://i.pinimg.com/originals/0c/7b/2d/0c7b2d1c5e4c7f7d83e144b2a045bc87.jpg",
                    ago: "ago",
                },
                {
                    id: '4',
                    name: "Emma Watson",
                    invited: "Summer Party",
                    add: "WorkEvo",
                    commentedOnProject: "WorkEvo",
                    commentText: "You suck!!!",
                    justnow: "Just now",
                    timeMinutes: "10",
                    timeHours: "1",
                    timeDates: "2",
                    timeFull: "6:09 pm Nov 17, 2018",
                    imgBig: "http://www.resimrehberi.com/files/file/welcome-wallpaper.jpg",
                    imgSmall: "https://i.pinimg.com/originals/0c/7b/2d/0c7b2d1c5e4c7f7d83e144b2a045bc87.jpg",
                    ago: "ago",
                },
                {
                    id: '5',
                    name: "Emma Watson",
                    invited: "Summer Party",
                    add: "WorkEvo",
                    commentedOnProject: "WorkEvo",
                    commentText: "You suck!!!",
                    justnow: "Just now",
                    timeMinutes: "10",
                    timeHours: "1",
                    timeDates: "2",
                    timeFull: "6:09 pm Nov 17, 2018",
                    imgBig: "none",
                    imgSmall: "https://i.pinimg.com/originals/0c/7b/2d/0c7b2d1c5e4c7f7d83e144b2a045bc87.jpg",
                    ago: "ago",
                },
            ]
        }
    }

    _renderItems = ({ item, index }) => (
        <View>
            <View style={styles.contentContainer}>
                <View style={styles.imgContainer}>
                    {item.imgBig == "none" ? <Image style={styles.imgBigFix} source={{ uri: item.imgBig }} /> : <Image style={styles.imgBig} source={{ uri: item.imgBig }} />}
                    <Image style={styles.imgSmall} source={{ uri: item.imgSmall }}/>
                    
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.textHead}>
                        <Text style={styles.textGrey}>
                            <Text style={styles.textBlack}>{item.name} </Text>
                            {item.statusText}
                            <Text style={styles.textBlack}> {item.invited}</Text>
                        </Text>
                    </View>
                    <View style={styles.textBottom}>
                        <Icon style={styles.icon} name='clock' color='#00bee2' size={20} />
                        <Text style={styles.textTime}>
                            {item.justnow}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatlist}
                    data={this.state.data}
                    renderItem={this._renderItems}
                    keyExtractor={(item, index) => item.id} />
            </View>
        )
    };
}