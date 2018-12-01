import React, { Component } from 'react';
import {
    Alert,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import styles from "./styles"

export default class DetailProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Emma Charlotte Duerre Watson",
            nickname: "Emma So Damn HOT",
            gender: "Nữ",
            live: "350 S. Beverly Dr.Suite 200 Beverly Hills, CA 90212-4819 USA",
            nationality: "Anh quốc",
            phone: "666-999-666",
            birthday: "15 tháng 4, 1990 (28 tuổi)",
            isHidden: false,
        }
    }

    onPress = () => {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.smallContrainer}>
                    <View style={styles.contentBox}>
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>Họ tên</Text>
                        </View>
                        <View style={styles.content}>
                            <View >
                                <Text style={styles.textContent}>{this.state.name}</Text>
                            </View>
                            {/* <View style={styles.statusBox}></View> */}
                            <TouchableOpacity style={this.state.isHidden ? styles.statusBoxAlt : styles.statusBox} onPress={this.onPress}></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contentBox}>
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>Nickname</Text>
                        </View>
                        <View style={styles.content}>
                            <View >
                                <Text style={styles.textContent}>{this.state.nickname}</Text>
                            </View>
                            <TouchableOpacity style={!this.state.isHidden ? styles.statusBoxAlt : styles.statusBox} onPress={this.onPress}></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.contentBox}>
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>Giới tính</Text>
                        </View>
                        <View style={styles.content}>
                            <View >
                                <Text style={styles.textContent}>{this.state.gender}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentBox}>
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>Nơi sống</Text>
                        </View>
                        <View style={styles.content}>
                            <View >
                                <Text style={styles.textContent}>{this.state.live}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentBox}>
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>Quốc tịch</Text>
                        </View>
                        <View style={styles.content}>
                            <View >
                                <Text style={styles.textContent}>{this.state.nationality}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentBox}>
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>Số điện thoại</Text>
                        </View>
                        <View style={styles.content}>
                            <View >
                                <Text style={[styles.textContent, { color: "#b7bdcc" }]}>{this.state.phone}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentBox}>
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>Sinh nhật</Text>
                        </View>
                        <View style={styles.content}>
                            <View >
                                <Text style={[styles.textContent, { color: "#b7bdcc" }]}>{this.state.birthday}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.contentBox, { borderBottomWidth: 0 }, { marginTop: 15 }]}>
                        <Text style={{ color: "#b7bdcc" }}>
                            Số điện thoại và sinh nhật bạn được bảo mật và không công khai
                        </Text>
                    </View>
                </View>
            </View>
        )
    };
}