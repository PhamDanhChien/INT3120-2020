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

var DataLearn0 = [
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
        // passed: false,
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
        // passed: false,
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
        // passed: false,
    }
]

var DataLearn1 = [
    {
        id: '1',
        question: 'Câu 1 nè?',
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
        // passed: false,
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
        // passed: false,
    },
]
var DataLearn2 = [
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
        // passed: false,
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
        // passed: false,
    },
]
var DataLearn3 = [
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
        // passed: false,
    },
];

var DataLearn = [DataLearn0, DataLearn1, DataLearn2, DataLearn3];

//Create defaultState
const defaultState = {
    // pass: true,

    Learns: [
        { id: 1, name: "Khái niệm và quy tắc", img: image.Learns.img1, data: DataLearn[0], total: DataLearn[0].length },
        { id: 2, name: "Biển báo đường bộ", img: image.Learns.img2, data: DataLearn[1], total: DataLearn[1].length },
        { id: 3, name: "Sa hình", img: image.Learns.img3, data: DataLearn[2], total: DataLearn[2].length },
        { id: 4, name: "Văn hóa và đạo đức", img: image.Learns.img4, data: DataLearn[3], total: DataLearn[3].length },
    ],

    //DataLearn: [DataLearn0, DataLearn1, DataLearn2, DataLearn3],

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
            Learns: state.Learns.map(e => {
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

        // case 'toggle': return {
        //     ...state,
        //     Learns: state.Learns.map(e => {

        //     })

        //     // DataLearn: state.DataLearn.map(e => {
        //     //     if (e.id != action.id) return e;
        //     //     return {
        //     //         ...e,
        //     //         passed: !e.passed,
        //     //     }
        //     // })
        // };

        case 'toggleAnswer': {

            //Đổi trạng thái đóng mở của answer và thay đổi giá trị totalTrue/totalFalse
            let TrueOffset = 0, FalseOffset = 0, opened = 0;
            let MyCorrect = state.Learns[action.typeLearn - 1].data[action.questionNumber - 1].answer[action.answerNumber - 1].correct;
            let MyOpened = state.Learns[action.typeLearn - 1].data[action.questionNumber - 1].answer[action.answerNumber - 1].opened;

            //Hệ số nhân khi đang mở thì trừ đi hoặc đóng thì cộng thêm 
            if (!MyOpened) opened = 1;
            else opened = -1;

            //Nếu answer đúng thì totalTrue +/- 1, sai thì totalFalse +/- 1
            if (MyCorrect) TrueOffset = 1;
            else FalseOffset = 1;

            return {
                ...state,
                Learns: state.Learns.map(e => {
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
                                        openedTrue: e1.status.openedTrue + TrueOffset * opened,
                                        openedFalse: e1.status.openedFalse + FalseOffset * opened
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

export default reducer;