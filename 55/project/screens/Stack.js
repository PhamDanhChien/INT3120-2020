import * as React from 'react';
import { Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';


import Home from './Home';

import Test from './Test';
import Learn from './Learn';
import SearchLaw from './SearchLaw';
import Trick from './Trick';
import Board from './Board';
import Help from './Help';
import LearnConcept from './learn/LearnConcept';
import SearchLawDetail from './searchLaw/SearchLawDetail';
import { hide } from 'expo/build/launch/SplashScreen';





const Stack = createStackNavigator();

class StackScreen extends React.Component {
    Reset = () => {
        Alert.alert(
            'Đặt lại tất cả bài học',
            'Bạn có muốn đặt lại tất cả các câu hỏi đã học không, sau khi đặt lại không thể khôi phục!',
            [
                { text: 'Đồng ý', onPress: () => this.props.dispatch({ type: 'reset-learn' }) },
                { text: 'Hủy bỏ', style: 'cancel' },
            ],
            { cancelable: false },
        )
    }

    GoPro = () => {
        Alert.alert(
            'Trở thành người dùng Pro',
            'Bạn có muốn trả một khoản phí nhỏ để mở khóa chức năng nâng cao và chặn quảng cáo không?',
            [
                { text: 'Đồng ý' },
                { text: 'Hủy bỏ', style: 'cancel' },
            ],
            { cancelable: false },
        )
    }

    render() {
        const { navigation } = this.props;
        return (

            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerTintColor: "white",
                    headerStyle: {
                        backgroundColor: "#66BB6A"
                    },
                }}>


                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Ôn thi giấy phép lái xe",
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => navigation.openDrawer()}
                            >
                                <Icon style={{ marginLeft: 10, color: 'white' }} size={30} name='menu' />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={this.GoPro}
                            >
                                <Icon style={{ marginRight: 10, color: 'white' }} size={40} name='professional-hexagon' />
                            </TouchableOpacity>
                        )
                    }}

                />

                <Stack.Screen
                    name="Thi_sat_hach"
                    component={Test}
                    options={{
                        title: "Thi sát hạch",
                    }}
                />

                <Stack.Screen
                    name="Hoc_li_thuyet"
                    component={Learn}
                    options={{
                        title: "Học lí thuyết",
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={this.Reset}>
                                <Image
                                    source={require("../images/reset.jpg")}
                                    style={{ width: 30, height: 30, marginRight: 15 }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen
                    name="Bien_bao"
                    component={Board}
                    options={{
                        title: "Biển báo giao thông",
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => Alert.alert("Chưa tìm kiếm được đâu :))")}>
                                <Icon style={{ marginRight: 10, color: 'white' }} size={30} name='magnify' />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen
                    name="Tra_cuu_luat"
                    component={SearchLaw}
                    options={{
                        title: "Tra cứu luật",
                    }}
                />

                <Stack.Screen
                    name="Meo_thi"
                    component={Trick}
                    options={{
                        title: "Mẹo thi kết quả cao",
                    }}
                />

                <Stack.Screen
                    name="Concept"
                    component={LearnConcept}
                    options={({ route }) => ({
                        title: route.params.title,
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => Alert.alert("Hiển thị bảng lựa chọn các câu hỏi")}>
                                <Icon style={{ marginRight: 10, color: 'white' }} size={35} name='apps' />
                            </TouchableOpacity>
                        )
                    })}
                />

                <Stack.Screen
                    name="Help"
                    component={Help}
                    options={{ header: hide }}
                />

                <Stack.Screen
                    name="SearchLawDetail"
                    component={SearchLawDetail}
                    options={{
                        title: "Luật giao thông"
                    }}
                />

            </Stack.Navigator>

        )
    }
}

export default connect()(StackScreen);