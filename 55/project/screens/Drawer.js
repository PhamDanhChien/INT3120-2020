import * as React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StackScreen from './Stack';
import Help from './Help';

const { width } = Dimensions.get('window');
const DrawerWidth = 7.5 / 10 * width;


const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>

            <Image
                resizeMode="cover"
                source={require("../images/home/image_drawer_top.jpg")}
                style={{ height: 180, width: "100%", marginTop: -40, marginBottom: 5 }}
            />

            <DrawerItemList {...props} />
        </View>
    </DrawerContentScrollView>
)


const Drawer = createDrawerNavigator();

export default class MyDrawer extends React.Component {

    render() {
        const { navigation } = this.props;
        return (

            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                drawerStyle={{
                    width: DrawerWidth,
                }}
                drawerContentOptions={{
                    activeTintColor: "#66BB6A",
                    labelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                    }
                }}

            >

                <Drawer.Screen name="Home" component={StackScreen}
                    options={{
                        title: 'Học thi bằng lái xe',
                        drawerIcon: (color) => <Icon size={25} color='#66BB6A' name='car' />,
                    }}
                />

                <Drawer.Screen name="Help" component={Help}
                    options={{
                        title: 'Hướng dẫn sử dụng',
                        drawerIcon: (color) => <Icon size={25} color='#66BB6A' name='help-circle-outline' />,
                    }}
                />

                <Drawer.Screen name="Email" component={Help}
                    options={{
                        title: 'Email hỗ trợ',
                        drawerIcon: (color) => <Icon size={25} color='#66BB6A' name='email' />,
                    }}
                />

                <Drawer.Screen name="Setting" component={Help}
                    options={{
                        title: 'Cài đặt',
                        drawerIcon: (color) => <Icon size={25} color='#66BB6A' name='settings' />,
                    }}
                />

            </Drawer.Navigator>

        );
    }
}

