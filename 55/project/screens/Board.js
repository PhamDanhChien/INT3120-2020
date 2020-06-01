import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NoticeBoardTab from '../components/NoticeBoardTab';
import TabBarOptions from '../styles/TabBarOptions';


const data = {
    dataCam: [
        {
            id: '1',
            img: require('../images/bien_bao_cam/1.jpg'),
            name: 'Cấm đi xe đạp',
            text: 'Để báo cấm xe đạp đi qua.'
        },
        {
            id: '2',
            img: require('../images/bien_bao_cam/2.jpg'),
            name: 'Cấm xe súc vật kéo',
            text: 'Để báo đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.'
        },
        {
            id: '3',
            img: require('../images/bien_bao_cam/3.jpg'),
            name: 'Hạn chế trọng lượng xe',
            text: 'Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ của nhà nước quy định, có trọng lượng toàn bộ (cả xe và hàng) vượt quá trị số ghi trên biển đi qua.'
        },
        {
            id: '4',
            img: require('../images/bien_bao_cam/4.jpg'),
            name: 'Hạn chế chiều cao',
            text: 'Cấm các xe (cơ giới và thô xơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định có chiều cao (tính đến điểm cao nhất kể cả xe và hàng hóa) vượt quá giá trị ghi số ghi trên biển không được đi qua.'
        },
        {
            id: '5',
            img: require('../images/bien_bao_cam/5.jpg'),
            name: 'Hạn chế chiều ngang',
            text: 'Cấm các xe (cơ giới và thô xơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định có chiều ngang (kể cả xe và hàng hóa) vượt quá trị số ghi trên biển không được qua.'
        },
        {
            id: '6',
            img: require('../images/bien_bao_cam/6.jpg'),
            name: 'Hạn chế chiều dài ôtô',
            text: 'Để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo luật lệ nhà nước quy định, có độ dài toàn bộ kể cả xe và hàng lớn hơn trị số ghi trên biển đi qua.'
        },
        {
            id: '7',
            img: require('../images/bien_bao_cam/7.jpg'),
            name: 'Cấm rẽ trái',
            text: 'Cấm rẽ trái (theo hướng mũi tên chỉ) ở những chỗ đường giao nhau. Biển có hiệu lực cấm các loại xe (cơ giới và thô sơ) trừ các xe được ưu tiên theo luật lệ nhà nước quy định được rẽ trái.'
        }
    ],

    dataLenh: [
        {
            id: '1',
            img: require('../images/bien_bao_hieu_lenh/1.jpg'),
            name: 'Hướng đi phải theo',
            text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được đi thẳng.'
        },
        {
            id: '2',
            img: require('../images/bien_bao_hieu_lenh/2.jpg'),
            name: 'Hướng đi phải theo',
            text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ phải.'
        },
        {
            id: '3',
            img: require('../images/bien_bao_hieu_lenh/3.jpg'),
            name: 'Hướng đi phải theo',
            text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ trái.'
        },
        {
            id: '4',
            img: require('../images/bien_bao_hieu_lenh/4.jpg'),
            name: 'Hướng đi phải theo',
            text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ phải.'
        },
        {
            id: '5',
            img: require('../images/bien_bao_hieu_lenh/5.jpg'),
            name: 'Hướng đi phải theo',
            text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ trái.'
        },
        {
            id: '6',
            img: require('../images/bien_bao_hieu_lenh/6.jpg'),
            name: 'Hướng đi phải theo',
            text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được đi thẳng và rẽ phải.'
        },
        {
            id: '7',
            img: require('../images/bien_bao_hieu_lenh/7.jpg'),
            name: 'Hướng đi phải theo',
            text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được đi thẳng và rẽ trái.'
        },
        {
            id: '8',
            img: require('../images/bien_bao_hieu_lenh/8.jpg'),
            name: 'Hướng đi phải theo',
            text: 'Để báo cho các loại xe (thô sơ và cơ giới) chỉ được rẽ phải và rẽ trái.'
        },

    ],

    dataDanger: [
        {
            id: '1',
            img: require('../images/bien_bao_nguy_hiem/1.jpg'),
            name: 'Chỗ ngoặt nguy hiểm vòng bên trái',
            text: 'Báo trước sắp đến chỗ ngoặt nguy hiểm vòng bên trái.'
        },
        {
            id: '2',
            img: require('../images/bien_bao_nguy_hiem/2.jpg'),
            name: 'Chỗ ngoặt nguy hiểm vòng bên phải',
            text: 'Báo trước sắp đến chỗ ngoặt nguy hiểm vòng bên phải.'
        },
    ]
}

const Tab = createMaterialTopTabNavigator();

export default class Board extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={Object.assign({}, TabBarOptions, { scrollEnabled: true })}
            >

                <Tab.Screen name='BIỂN BÁO CẤM' component={Cam} />
                <Tab.Screen name='BIỂN BÁO HIỆU LỆNH' component={Hieu_lenh} />
                <Tab.Screen name='BIỂN BÁO NGUY HIỂM' component={Nguy_hiem} />
                <Tab.Screen name='BIỂN BÁO PHỤ' component={Phu} />
            </Tab.Navigator>
        )
    }
}


export function Cam() {
    return (
        <NoticeBoardTab data={data.dataCam} />
    )
}

export function Hieu_lenh() {
    return (
        <NoticeBoardTab data={data.dataLenh} />
    )
}

export function Nguy_hiem() {
    return (
        <NoticeBoardTab data={data.dataDanger} />
    )
}

export function Phu() {
    return (
        <NoticeBoardTab data={data.dataDanger} />
    )
}

