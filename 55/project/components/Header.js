import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>

                </View>

                <View style={styles.bot}>
                    <Text style={styles.title}> {this.props.title} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 85,
        backgroundColor: "#66BB6A",
    },

    top: {
        height: 30,
    },

    bot: {
        flex: 1,
        justifyContent: "center"
    },

    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        position: "absolute",
        left: 70,
    }
})