import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ExplainQuestion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Icon style={{}} color='#66BB6A' size={30} name='chat-processing' />

                    <Text style={styles.title}>GIẢI THÍCH ĐÁP ÁN</Text>
                </View>

                <View style={styles.bot}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 15,
    },

    top: {
        flexDirection: "row",
        alignItems: "center",
    },

    title: {
        fontWeight: "bold",
        marginLeft: 10,
    },

    bot: {
        backgroundColor: '#66BB6A55',
        borderRadius: 3,
        marginTop: 5,
    },

    text: {
        margin: 8,
    }
})