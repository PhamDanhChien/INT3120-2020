import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { CellTest } from '../components/CellTest';


export default function Test({ navigation }) {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.row}>
                <CellTest progress='0/20 câu' de='Đề số 1' on_Press={() => navigation.navigate('Concept', { typeLearn: 1, title: "Thi sát hạch" })} />
                <CellTest progress='0/20 câu' de='Đề số 2' on_Press={() => navigation.navigate('Concept', { typeLearn: 1, title: "Thi sát hạch" })} />
                <CellTest progress='0/20 câu' de='Đề số 3' on_Press={() => navigation.navigate('Concept', { typeLearn: 1, title: "Thi sát hạch" })} />
            </View>

            <View style={styles.row}>
                <CellTest progress='0/20 câu' de='Đề số 4' on_Press={() => navigation.navigate('Concept', { typeLearn: 1, title: "Thi sát hạch" })} />
                <CellTest progress='0/20 câu' de='Đề số 5' on_Press={() => navigation.navigate('Concept', { typeLearn: 1, title: "Thi sát hạch" })} />
                <CellTest progress='0/20 câu' de='Đề số 6' on_Press={() => navigation.navigate('Concept', { typeLearn: 1, title: "Thi sát hạch" })} />
            </View>

            <View style={styles.row}>
                <CellTest progress='0/20 câu' de='Đề số 7' on_Press={() => navigation.navigate('Concept', { typeLearn: 1, title: "Thi sát hạch" })} />
                <CellTest progress='0/20 câu' de='Đề số 8' on_Press={() => navigation.navigate('Concept', { typeLearn: 1, title: "Thi sát hạch" })} />
                <CellTest progress='Ngẫu nhiên' de='TẠO ĐỀ' on_Press={() => navigation.navigate('Concept', { typeLearn: 1, title: "Thi sát hạch" })} />
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

})