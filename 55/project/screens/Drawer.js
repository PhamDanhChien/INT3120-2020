import * as React from 'react';
import { Button, View, Image, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StackScreen from './Stack';
import Help from './Help';

const { width } = Dimensions.get('window');
const DrawerWidth = 7.5 / 10 * width;

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function Usage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

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

                <Drawer.Screen name="Stack" component={StackScreen}
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

            </Drawer.Navigator>

        );
    }
}

