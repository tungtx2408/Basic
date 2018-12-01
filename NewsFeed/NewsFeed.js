import React, { Component } from 'react';
import { View, Text, FlatList, Image } from "react-native";
import Styles from "./styles"
import Icon from "react-native-elements"
export default class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    text: "Nunc Posuere",
                    textgray: " invinted you on ",
                    textblue: "AB UI Kit",
                    icon1: "https://img.icons8.com/ultraviolet/2x/clock.png",
                    textIcon1: "Quang",
                    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFxcVFxUVFRUXFxUVFRcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EAB4QAQEBAAEEAwAAAAAAAAAAAAABEfBRYYGREiFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOogAgAAACKAgAAAIKAAAAAAAKgCgAogDQkAaEUFVlQaisxQaGQHkACAAAAIqAAAAAAAAAAAAAAAKkUAAAAFVCAqsqDSsroNaiAMAACAKioAABUVAAABFgKgoIAAAAAAqAKIAoigAAoAKqQBoQBkVAEUAABBUAABBQEAAUAQUBBQEAAAADQAAFEKCrGdUFEUBUwAFQAAAAAAEFQAVAAAAABAFABFQ57BUADQ0oGkIAAAAAoigogDSKgAAAAAigCAKIAolAVFQAKAAAgAAGgGAAi4AAAAAoigCANggGAoIKgIKAgpQQAACAGC4CAAAAAAIoCKACAAilAEUAADQAbRUABQBAAAAAAABFAAAEUBBQBFAQVABcTAExTAQFBEUACKCYjQCqIAoAgAAAAAAAAKCAoIKYCCgIKYCFVAAi4CIpQRFAEUBBTAA5+gKIAoICiKAIoAaAAgKIoKgoAgCiAKgaClYaoLRnVlApoAFPoBAKAqAL4EAQAFNQBRAFEUAAFQABAF1WV0FBAUQA0AEq0AJRKoBqAL8i3umqBgmABqAKIAogCiAKAAqAKaAAABegAAAYABoAAAAAJVgAWAAIAAACYAAAP/2Q==",
                    img1: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFxcVFxUVFRUXFxUVFRcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EAB4QAQEBAAEEAwAAAAAAAAAAAAABEfBRYYGREiFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOogAgAAACKAgAAAIKAAAAAAAKgCgAogDQkAaEUFVlQaisxQaGQHkACAAAAIqAAAAAAAAAAAAAAAKkUAAAAFVCAqsqDSsroNaiAMAACAKioAABUVAAABFgKgoIAAAAAAqAKIAoigAAoAKqQBoQBkVAEUAABBUAABBQEAAUAQUBBQEAAAADQAAFEKCrGdUFEUBUwAFQAAAAAAEFQAVAAAAABAFABFQ57BUADQ0oGkIAAAAAoigogDSKgAAAAAigCAKIAolAVFQAKAAAgAAGgGAAi4AAAAAoigCANggGAoIKgIKAgpQQAACAGC4CAAAAAAIoCKACAAilAEUAADQAbRUABQBAAAAAAABFAAAEUBBQBFAQVABcTAExTAQFBEUACKCYjQCqIAoAgAAAAAAAAKCAoIKYCCgIKYCFVAAi4CIpQRFAEUBBTAA5+gKIAoICiKAIoAaAAgKIoKgoAgCiAKgaClYaoLRnVlApoAFPoBAKAqAL4EAQAFNQBRAFEUAAFQABAF1WV0FBAUQA0AEq0AJRKoBqAL8i3umqBgmABqAKIAogCiAKAAqAKaAAABegAAAYABoAAAAAJVgAWAAIAAACYAAAP/2Q==",

                    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAHf9tWW0NANtNEor4jjlF0HCV04oROAFV-HBpHYSh3TE5QmsoQ",

                    icon: "https://img.icons8.com/ultraviolet/2x/clock.png",
                    textIcon: "Justnow",
                },
                {
                    text: "Nunc Posuere",
                    textgray: " invinted you on ",
                    textblue: "AB UI Kit",
                    icon1: "https://img.icons8.com/ultraviolet/2x/clock.png",
                    textIcon1: "Quang",
                    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFxcVFxUVFRUXFxUVFRcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EAB4QAQEBAAEEAwAAAAAAAAAAAAABEfBRYYGREiFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOogAgAAACKAgAAAIKAAAAAAAKgCgAogDQkAaEUFVlQaisxQaGQHkACAAAAIqAAAAAAAAAAAAAAAKkUAAAAFVCAqsqDSsroNaiAMAACAKioAABUVAAABFgKgoIAAAAAAqAKIAoigAAoAKqQBoQBkVAEUAABBUAABBQEAAUAQUBBQEAAAADQAAFEKCrGdUFEUBUwAFQAAAAAAEFQAVAAAAABAFABFQ57BUADQ0oGkIAAAAAoigogDSKgAAAAAigCAKIAolAVFQAKAAAgAAGgGAAi4AAAAAoigCANggGAoIKgIKAgpQQAACAGC4CAAAAAAIoCKACAAilAEUAADQAbRUABQBAAAAAAABFAAAEUBBQBFAQVABcTAExTAQFBEUACKCYjQCqIAoAgAAAAAAAAKCAoIKYCCgIKYCFVAAi4CIpQRFAEUBBTAA5+gKIAoICiKAIoAaAAgKIoKgoAgCiAKgaClYaoLRnVlApoAFPoBAKAqAL4EAQAFNQBRAFEUAAFQABAF1WV0FBAUQA0AEq0AJRKoBqAL8i3umqBgmABqAKIAogCiAKAAqAKaAAABegAAAYABoAAAAAJVgAWAAIAAACYAAAP/2Q==",
                    img1: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFxcVFxUVFRUXFxUVFRcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EAB4QAQEBAAEEAwAAAAAAAAAAAAABEfBRYYGREiFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOogAgAAACKAgAAAIKAAAAAAAKgCgAogDQkAaEUFVlQaisxQaGQHkACAAAAIqAAAAAAAAAAAAAAAKkUAAAAFVCAqsqDSsroNaiAMAACAKioAABUVAAABFgKgoIAAAAAAqAKIAoigAAoAKqQBoQBkVAEUAABBUAABBQEAAUAQUBBQEAAAADQAAFEKCrGdUFEUBUwAFQAAAAAAEFQAVAAAAABAFABFQ57BUADQ0oGkIAAAAAoigogDSKgAAAAAigCAKIAolAVFQAKAAAgAAGgGAAi4AAAAAoigCANggGAoIKgIKAgpQQAACAGC4CAAAAAAIoCKACAAilAEUAADQAbRUABQBAAAAAAABFAAAEUBBQBFAQVABcTAExTAQFBEUACKCYjQCqIAoAgAAAAAAAAKCAoIKYCCgIKYCFVAAi4CIpQRFAEUBBTAA5+gKIAoICiKAIoAaAAgKIoKgoAgCiAKgaClYaoLRnVlApoAFPoBAKAqAL4EAQAFNQBRAFEUAAFQABAF1WV0FBAUQA0AEq0AJRKoBqAL8i3umqBgmABqAKIAogCiAKAAqAKaAAABegAAAYABoAAAAAJVgAWAAIAAACYAAAP/2Q==",

                    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAHf9tWW0NANtNEor4jjlF0HCV04oROAFV-HBpHYSh3TE5QmsoQ",
                    icon: "https://img.icons8.com/ultraviolet/2x/clock.png",
                    textIcon: "Justnow",

                    iconImg: "https://img.icons8.com/nolan/2x/circled-play.png"
                },

            ]
        }
    }

    _renderItems = ({ item, indext }) => (
        <View>
            {/* 1 */}
            <View style={Styles.box}>
                {/* image */}
                <View style={Styles.ImageRight}>
                    <Image source={{ uri: item.Img }} style={Styles.ImageRight1} />
                    <Image source={{ uri: item.iconImg }} style={Styles.Img} />
                    <View style={Styles.ImageRight2} />
                </View>
                {/* text */}
                <View style={Styles.TextLeft}>
                    <View>
                        <Text style={Styles.TextBlack}>
                            Nunc Posuere
                                <Text style={Styles.TextGray}> invinted you on </Text>
                            Summer Cool Party
                            </Text>
                    </View>
                    <View style={Styles.Icon}>
                        <Image source={{ uri: item.icon }} style={Styles.img} />
                        <Text style={Styles.TextGray}>{item.textIcon}</Text>
                    </View>
                </View>
            </View>

            <View style={Styles.boderBottom} ></View>
            {/* 2 */}
            <View style={Styles.box}>
                {/* image */}
                <View style={Styles.ImageRightSmall}>
                    <Image source={{ uri: item.img }} style={Styles.ImageRight2Small} />
                </View>
                {/* text */}
                <View style={Styles.TextLeft}>
                    <View>
                        <Text style={Styles.TextBlack}>
                            {item.text}
                            <Text style={Styles.TextGray}>{item.textgray}</Text>
                        </Text>
                        <Text style={Styles.TextBlue}>{item.textblue}</Text>
                    </View>
                    <View style={Styles.Icon}>
                        <Image source={{ uri: item.icon1 }} style={Styles.img} />
                        <Text style={Styles.TextGray}>{item.textIcon1}</Text>
                    </View>
                </View>
            </View>

            <Image source={{ uri: item.img1 }} style={Styles.boderBottom} />
            {/* 3 */}
            <View style={Styles.box}>
                {/* image */}
                <View style={Styles.ImageRight}>
                    <Image source={{ uri: item.Img }} style={Styles.ImageRight1} />
                    <View style={Styles.ImageRight2} />
                </View>
                {/* text */}
                <View style={Styles.TextLeft}>
                    <View>
                        <Text style={Styles.TextBlack}>
                            Nunc Posuere
                                <Text style={Styles.TextGray}> invinted you on </Text>
                            Summer Cool Party
                            </Text>
                    </View>
                    <View style={Styles.Icon}>
                        <Image source={{ uri: item.icon }} style={Styles.img} />
                        <Text style={Styles.TextGray}>{item.textIcon}</Text>
                    </View>
                </View>
            </View>
            <Image source={{ uri: item.img1 }} style={Styles.boderBottom} />
        </View>

    )

    render() {
        return (
            <View style={Styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItems}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}