import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const image = {
    Learns: {
        img1: require('../images/khai_niem.jpg'),
        img2: require('../images/he_thong.jpg'),
        img3: require('../images/sa_hinh.jpg'),
        img4: require('../images/van_hoa.jpg'),
    }
}

let DataLearn = [
    {
        id: '1',
        question: 'Khái niệm "phần đường xe chạy" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại.',
                correct: true,
                opened: false,
            },
            {
                key: '2',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, dải đất dọc hai bên đường để đảm bảo an toàn giao thông.',
                correct: false,
                opened: false,
            },
            {
                key: '3',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, các công trình, thiết bị phụ trợ khác và dải đất dọc hai bên đường để đảm bảo an toàn giao thông.',
                correct: false,
                opened: false,
            }
        ],
        status: { totalTrue: 1, openedTrue: 0, openedFalse: 0 },
        passed: false,
    },
    {
        id: '2',
        question: '"Vạch kẻ đường" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.',
                correct: true,
                opened: false,
            },
            {
                key: '2',
                text: 'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.',
                correct: false,
                opened: false,
            },
            {
                key: '3',
                text: 'Tất cả các ý trên.',
                correct: false,
                opened: false,
            }
        ],
        status: { totalTrue: 1, openedTrue: 0, openedFalse: 0 },
        passed: false,
    },
    {
        id: '3',
        question: '"Vạch kẻ đường" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.',
                correct: true,
                opened: false,
            },
            {
                key: '2',
                text: 'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.',
                correct: false,
                opened: false,
            },
            {
                key: '3',
                text: 'Tất cả các ý trên.',
                correct: false,
                opened: false,
            }
        ],
        status: { totalTrue: 1, openedTrue: 0, openedFalse: 0 },
        passed: false,
    }
]


//Create defaultState
const defaultState = {
    // pass: true,

    Learns: [
        { id: 1, name: "KHÁI NIỆM VÀ QUY TẮC", img: image.Learns.img1, total: DataLearn.length, passed: 0 },
        { id: 2, name: "BIỂN BÁO ĐƯỜNG BỘ", img: image.Learns.img2, total: 36, passed: 0 },
        { id: 3, name: "SA HÌNH", img: image.Learns.img3, total: 34, passed: 0 },
        { id: 4, name: "VĂN HÓA VÀ ĐẠO ĐỨC", img: image.Learns.img4, total: 36, passed: 0 },
    ],

    DataLearn: DataLearn,

}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'add': return {
            ...state,
            Learns: state.Learns.map(e => {
                if (e.id != action.id) return e;
                return {
                    ...e,
                    passed: e.passed + 1,
                }
            })
        };

        case 'reset-learn': return {
            ...state,
            DataLearn: state.DataLearn.map(e => {
                return {
                    ...e,
                    answer: e.answer.map(e1 => {
                        return {
                            ...e1,
                            opened: false,
                        }
                    }),
                    status: { totalTrue: e.status.totalTrue, openedTrue: 0, openedFalse: 0 }
                }
            }),
        };

        case 'toggle': return {
            ...state,
            DataLearn: state.DataLearn.map(e => {
                if (e.id != action.id) return e;
                return {
                    ...e,
                    passed: !e.passed,
                }
            })
        };

        case 'toggleAnswer': {

            //Đổi trạng thái đóng mở của answer và thay đổi giá trị totalTrue/totalFalse
            let trueOffset = 0, falseOffset = 0, opened = 0;
            let MyCorrect = state.DataLearn[action.questionNumber - 1].answer[action.answerNumber - 1].correct;
            let MyOpened = state.DataLearn[action.questionNumber - 1].answer[action.answerNumber - 1].opened;

            //Hệ số nhân khi đang mở thì trừ đi hoặc đóng thì cộng thêm 
            if (!MyOpened) opened = 1;
            else opened = -1;

            //Nếu answer đúng thì totalTrue +/- 1, sai thì totalFalse +/- 1
            if (MyCorrect) trueOffset = 1;
            else falseOffset = 1;

            return {
                ...state,
                DataLearn: state.DataLearn.map(e => {
                    if (e.id != action.questionNumber) return e;
                    return {
                        ...e,

                        answer: e.answer.map(e1 => {
                            if (e1.key != action.answerNumber) return e1;
                            return {
                                ...e1,
                                opened: !e1.opened,
                            }
                        }),

                        status: Object.assign(e.status,
                            {
                                openedTrue: e.status.openedTrue + trueOffset * opened,
                                openedFalse: e.status.openedFalse + falseOffset * opened
                            })

                    }
                })
            };
        }

        default: return state;

    }
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const pReducer = persistReducer(persistConfig, reducer);

export default reducer;