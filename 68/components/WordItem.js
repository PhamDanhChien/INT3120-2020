import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


export default function WordItem ({text, navigation}){
    //console.log(text)
    
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate("KanjiDetail")}>
            <View style={styles.container}>
                <Text style={styles.title}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 50,
        height:50,
        borderRadius: 25,
        backgroundColor: 'rgb(224, 224, 224)',
        margin:6
    },
    title: {
        textAlign: 'center',
        fontSize: 27,
        color: '#006265'
    },
});
