import * as React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class CellHome extends React.Component {
    render() {
        return (
            // <Text> huhu </Text>
            <View style={styles.cell}>
                <TouchableOpacity onPress={this.props.Press}>

                    <View style={{
                        borderRadius: 10, backgroundColor: "green", borderWidth: 2, borderColor: "green",
                    }}>
                        <Image
                            resizeMode="stretch"
                            source={this.props.img}
                            style={styles.icon}
                        />
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
}

const { height, width } = Dimensions.get('window');
const a = 20 / 100 * height;
const b = 45 / 100 * width;

const styles = StyleSheet.create({

    cell: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,

    },

    icon: {
        width: b,
        height: a,


        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        // borderTopEndRadius: 20,
        borderRadius: 10,
    },

});