import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';


class Answer extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleAnswer = () => {
        let { typeLearn, questionNumber, answerNumber } = this.props;
        this.props.dispatch({ type: 'toggleAnswer', typeLearn: typeLearn, questionNumber: questionNumber, answerNumber: answerNumber });

    }

    render() {
        let { typeLearn } = this.props;
        let AnswerStyle = [styles.answerText], CircleStyle = [styles.circle], NumberStyle = [styles.number], CheckIcon = null;

        if (this.props.Learns[typeLearn - 1].data[this.props.questionNumber - 1].answer[this.props.answerNumber - 1].opened) {
            NumberStyle = [styles.number, styles.numberOpened];

            if (this.props.correct) {
                AnswerStyle = [styles.answerText, styles.answerTextOpenedTrue];
                CircleStyle = [styles.circle, styles.circleOpenedTrue];
                CheckIcon = <Icon style={{ color: 'green' }} size={30} name='check' />
            }
            else {
                AnswerStyle = [styles.answerText, styles.answerTextOpenedFalse];
                CircleStyle = [styles.circle, styles.circleOpenedFalse];
                CheckIcon = <Icon style={{ color: "red" }} size={30} name='close' />
            }
        }

        return (
            <TouchableOpacity
                // this.props.dispatch({ type: 'toggleAnswer', questionNumber: 1, answerNumber: 1 })
                onPress={this.toggleAnswer}
            >
                <View style={styles.answer}>

                    <View style={styles.left}>
                        <View style={CircleStyle}>
                            <Text style={NumberStyle}>
                                {this.props.answerNumber}
                            </Text>
                        </View>
                    </View>


                    <Text style={AnswerStyle}>
                        {this.props.answer}
                    </Text>

                    <View style={styles.right}>
                        {CheckIcon}
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state) {
    return { Learns: state.Learn }
}

export default connect(mapStateToProps)(Answer);

const styles = StyleSheet.create({

    answer: {
        paddingVertical: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },

    answerText: {
        fontSize: 15,
        flex: 1,
        // marginRight: 10,
    },

    answerTextOpenedTrue: {
        color: "green",
    },

    answerTextOpenedFalse: {
        color: "#EE534F",
    },

    left: {
        width: 60,
        justifyContent: "center",
        alignItems: "center",
    },

    right: {
        width: 40,
        alignItems: "center",
    },

    circle: {
        justifyContent: "center",
        alignItems: "center",
        width: 37,
        height: 37,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#aaa",
    },

    circleOpenedTrue: {
        backgroundColor: "#66BB6A",
        borderColor: "#66BB6A",
    },

    circleOpenedFalse: {
        backgroundColor: "#EE534F",
        borderColor: "#EE534F",
    },

    number: {
        fontSize: 16,
    },

    numberOpened: {
        color: "#fff",
    },
})