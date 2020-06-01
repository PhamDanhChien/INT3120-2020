import * as React from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import Question from '../components/Question';
import PresentQuestion from '../components/PresentQuestion';
import Answer from '../components/Answer';
import ExplainQuestion from '../components/ExplainQuestion';


class QuestionScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalCorrect: 0,
        }
    }

    render() {
        let gt = this.props.passed ? (<ExplainQuestion text={this.props.element.explain} />) : null;        ////dâdadsadada

        return (
            <View>
                <View style={styles.top}>
                    <ScrollView>
                        <Question text={this.props.element.question} />

                        <FlatList
                            data={this.props.element.answer}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {

                                // if (item.correct) this.setState({ totalCorrect: this.state.totalCorrect + 1 })

                                return (
                                    <Answer
                                        typeLearn={this.props.typeLearn}
                                        questionNumber={this.props.questionNumber}
                                        answerNumber={index + 1}
                                        answer={item.text}
                                        correct={item.correct}
                                    />
                                )
                            }}
                        >
                        </FlatList>

                        {gt}

                    </ScrollView>
                </View>

                <View style={styles.bot}>
                    <PresentQuestion
                        number={this.props.element.id}
                        total={this.props.total}
                        next={this.props.next}
                        back={this.props.back}
                    />
                </View>

            </View>


        )
    }
}

export default connect()(QuestionScreen);

const { width } = Dimensions.get('window');
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
    }
})