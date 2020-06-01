import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import QuestionScreen from '../../components/QuestionScreen';

const { width } = Dimensions.get('window');

class LearnConcept extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { typeLearn } = this.props.route.params;

        return (
            <FlatList
                removeClippedSubviews={true}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}

                data={this.props.Learns[typeLearn - 1].data}
                keyExtractor={item => item.id}

                ref={(ref) => { this.flatListRef = ref; }}
                renderItem={({ item, index }) => (

                    <QuestionScreen
                        typeLearn={typeLearn}
                        questionNumber={index + 1}
                        element={item}
                        total={this.props.Learns[typeLearn - 1].data.length}
                        passed={item.status.totalTrue == item.status.openedTrue && item.status.openedFalse == 0}
                        next={() => { if (index < this.props.Learns[typeLearn - 1].data.length - 1) this.flatListRef.scrollToIndex({ animated: false, index: index + 1 }) }}
                        back={() => { if (index > 0) this.flatListRef.scrollToIndex({ animated: false, index: index - 1 }) }}
                    />

                )
                }
            >
            </FlatList>

        );
    }
}

function mapStateToProps(state) {
    return {
        Learns: state.Learn,
    }
}

export default connect(mapStateToProps)(LearnConcept);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    top: {
        flex: 6,
        width: width,
        fontWeight: "bold",
    },

    bot: {
        flex: 1,
        justifyContent: "center",
    },

})