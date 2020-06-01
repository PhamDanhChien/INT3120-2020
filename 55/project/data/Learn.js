
export const image = {
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
            },
            {
                key: '2',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, dải đất dọc hai bên đường để đảm bảo an toàn giao thông.',
                correct: false,
            },
            {
                key: '3',
                text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, các công trình, thiết bị phụ trợ khác và dải đất dọc hai bên đường để đảm bảo an toàn giao thông.',
                correct: false,
            }
        ],
        explain: 'Phần đường xe chạy không bao gồm dải đất dọc hai bên đường và các công trình, thiết bị phụ trợ khác.\n' +
            'Đáp án 2 và 3 sai vì có "dải đất dọc hai bên đường" và "các công trình, thiết bị phụ trợ khác".'
    },
    {
        id: '2',
        question: '"Vạch kẻ đường" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.',
                correct: true,
            },
            {
                key: '2',
                text: 'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.',
                correct: false,
            },
            {
                key: '3',
                text: 'Tất cả các ý trên.',
                correct: false,
            }
        ],
        explain: 'Vạch kẻ đường không tính vị trí đỗ, chỉ xét vị trí dừng.\n' +
            'Đáp án 2 sai vì có "đỗ trên đường."'
    },
    {
        id: '3',
        question: 'Khái niệm "làn đường" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Là một phần của đường được chia theo chiều ngang của đường, có chiều rộng đủ cho xe đỗ an toàn.',
                correct: false,
            },
            {
                key: '2',
                text: 'Là một phần của đường được chia theo chiều dọc của đường, có chiều rộng đủ cho xe chạy an toàn.',
                correct: true,
            },
            {
                key: '3',
                text: 'Tất cả các ý trên.',
                correct: false,
            }
        ],
        explain: '"Làn đường" là chia theo chiều "dọc", có bề rộng đủ cho xe "chạy".\n' +
            'Đáp án 1 sai vì chia theo chiều "ngang" và đủ độ rộng cho xe "đỗ".'
    },
    {
        id: '4',
        question: 'Khái niệm "đường bộ" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Đường, cầu đường bộ.',
                correct: true,
            },
            {
                key: '2',
                text: 'Hầm đường bộ, bến phà đường bộ.',
                correct: true,
            },
            {
                key: '3',
                text: 'Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ khác.',
                correct: false,
            }
        ],
        explain: 'Đường bộ không bao gồm các công trình phụ trợ khác.\n' +
            'Đáp án 3 sai vì có "các công trình phụ trợ khác".'
    },
    {
        id: '5',
        question: 'Khái niệm "khổ giới hạn của đường bộ" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua an toàn.',
                correct: true,
            },
            {
                key: '2',
                text: 'Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.',
                correct: false,
            },
            {
                key: '3',
                text: 'Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn.',
                correct: false,
            }
        ],
        explain: '"Khổ giới hạn của đường bộ" bao gồm cả chiều cao và chiều rộng.\n' +
            'Đáp án 2 sai vì chỉ có "chiều rộng", đáp án 3 sai vì chỉ có "chiều cao".'
    },
    {
        id: '6',
        question: 'Khái niệm "công trình đường bộ" được hiểu như thế nào là đúng? Công trình đường bộ gồm:',
        answer: [
            {
                key: '1',
                text: 'Đường bộ, nơi dừng xe, đỗ xe trên đường bộ, đèn tín hiệu, biển báo hiệu, vạch kẻ đường, cọc tiêu.',
                correct: true,
            },
            {
                key: '2',
                text: 'Rào chắn, đảo giao thông, dải phân cách, cột cây số, tường, kè, hệ thống thoát nước, trạm kiểm tra trọng tải xe, trạm thu phí và các công trình, thiết bị phụ trợ khác.',
                correct: true,
            },
            {
                key: '3',
                text: 'Đường bộ, nơi dừng xe, đỗ xe trong khu vực nhà ga đường sắt, cảng hàng không.',
                correct: false,
            }
        ],
        explain: 'Công trình đường bộ không bao gồm cảng hàng không.\n' +
            'Đáp án 3 sai vì có "cảng hàng không".'
    },
    {
        id: '7',
        question: 'Khái niệm "khổ giới hạn của đường bộ" được hiểu như thế nào là đúng?',
        answer: [
            {
                key: '1',
                text: 'Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.',
                correct: true,
            },
            {
                key: '2',
                text: 'Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.',
                correct: false,
            },
            {
                key: '3',
                text: 'Là khoảng trống có kích thước giới hạn về chiều cao của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.',
                correct: false,
            }
        ],
        explain: '"Khổ giới hạn của đường bộ" bao gồm cả chiều cao và chiều rộng.\n' +
            'Đáp án 2 sai vì chỉ có "chiều rộng", đáp án 3 sai vì chỉ có "chiều cao".'
    }
]

var DataLearn1 = [
    {
        id: '1',
        question: 'Câu 1 của biển báo đường bộ nè?',
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
    },
];

var DataLearn = [DataLearn0, DataLearn1, DataLearn2, DataLearn3];


// Thêm status cho mỗi câu hỏi
DataLearn = DataLearn.map(e => {
    return (
        e.map(e1 => {
            let myTotalTrue = 0, explainAdd = '\nĐáp án đúng: ';
            e1.answer.forEach((element, index) => {
                if (element.correct) {
                    myTotalTrue += 1;
                    explainAdd += index + 1 + ', '
                }
            });
            explainAdd = explainAdd.slice(0, explainAdd.length - 2);

            return {
                ...e1,
                answer: e1.answer.map(ans => {
                    return {
                        ...ans,
                        opened: false,
                    }
                }),
                status: { totalTrue: myTotalTrue, openedTrue: 0, openedFalse: 0 },
                explain: e1.explain + explainAdd,
            }
        })
    )
})

export default DataLearn;
// export default image;