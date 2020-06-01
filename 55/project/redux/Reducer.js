import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { image } from '../data/Learn';
import DataLearn from '../data/Learn';


//Create defaultState
const defaultState = {

    Learn: [
        { id: 1, name: "Khái niệm và quy tắc", img: image.Learns.img1, data: DataLearn[0], total: DataLearn[0].length },
        { id: 2, name: "Biển báo đường bộ", img: image.Learns.img2, data: DataLearn[1], total: DataLearn[1].length },
        { id: 3, name: "Sa hình", img: image.Learns.img3, data: DataLearn[2], total: DataLearn[2].length },
        { id: 4, name: "Văn hóa và đạo đức", img: image.Learns.img4, data: DataLearn[3], total: DataLearn[3].length },
    ],

}

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'reset-learn': return {
            ...state,
            Learns: state.Learn.map(e => {
                return {
                    ...e,
                    data: e.data.map(e1 => {
                        return {
                            ...e1,

                            answer: e1.answer.map(e2 => {
                                return {
                                    ...e2,
                                    opened: false,
                                }
                            }),

                            status: Object.assign(e1.status, { openedTrue: 0 }, { openedFalse: 0 }),

                        }
                    })
                }
            }),
        };

        case 'toggleAnswer': {

            //Đổi trạng thái đóng mở của answer và thay đổi giá trị totalTrue/totalFalse
            let trueOffset = 0, falseOffset = 0, opened = 0;
            let MyCorrect = state.Learn[action.typeLearn - 1].data[action.questionNumber - 1].answer[action.answerNumber - 1].correct;
            let MyOpened = state.Learn[action.typeLearn - 1].data[action.questionNumber - 1].answer[action.answerNumber - 1].opened;

            //Hệ số nhân khi đang mở thì trừ đi hoặc đóng thì cộng thêm 
            if (!MyOpened) opened = 1;
            else opened = -1;

            //Nếu answer đúng thì totalTrue +/- 1, sai thì totalFalse +/- 1
            if (MyCorrect) trueOffset = 1;
            else falseOffset = 1;

            return {
                ...state,
                Learn: state.Learn.map(e => {
                    if (e.id != action.typeLearn) return e;
                    return {
                        ...e,
                        data: e.data.map(e1 => {
                            if (e1.id != action.questionNumber) return e1;
                            return {
                                ...e1,

                                answer: e1.answer.map(e2 => {
                                    if (e2.key != action.answerNumber) return e2;
                                    return {
                                        ...e2,
                                        opened: !e2.opened,
                                    }
                                }),

                                status: Object.assign(e1.status,
                                    {
                                        openedTrue: e1.status.openedTrue + trueOffset * opened,
                                        openedFalse: e1.status.openedFalse + falseOffset * opened
                                    }
                                )

                            }
                        })
                    }
                })
            }
        }

        default: return state;

    }
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const pReducer = persistReducer(persistConfig, reducer);

export default pReducer;