import * as React from 'react';
import { StyleSheet } from "react-native"
import { FlatList } from 'react-native-gesture-handler';
import RowLearn from '../components/RowLearn';

import { connect } from 'react-redux';


class Learn extends React.Component {

    render() {
        const { navigation } = this.props;

        return (
            <FlatList style={styles.container}
                data={this.props.Learns}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <RowLearn
                            element={item}
                            type={index}
                            Press={() => navigation.navigate('Concept', { typeLearn: index + 1, title: item.name })}
                        />
                    )
                }}
            >

            </FlatList>
        )
    }
}

function mapStateToProps(state) {
    return { Learns: state.Learn }
}

export default connect(mapStateToProps)(Learn);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})