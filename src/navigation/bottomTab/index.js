import { View } from 'react-native'
import React from 'react'
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import styles from './styles';
import appColors from '../../theme/appColors';
import appfonts from '../../theme/appFonts'
import { fontSizes } from '../../theme/appConstant';
import Home from '../../screen/home'
import Cart from '../../screen/cart'
import Profile from '../../screen/profile';
import {HomeIcon} from '../../assets/icons/home'
import {CartIcon} from '../../assets/icons/cart'
import {ProfileIcon} from '../../assets/icons/profile' 

export default function BottomTab() {
  const Tab = AnimatedTabBarNavigator();
  return (
    <View style={styles.tabContainer}>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: appColors.black,
        activeBackgroundColor:'transparent',
        labelStyle: {
          fontFamily:appfonts.RobotoMedium,
          fontSize: fontSizes.FONT19,
        },
      }}
      tabBar={props => (
        <TabBar
          activeColors={"#2F7C6E"}
          activeTabBackgrounds={"#DFF7F6"}
          {...props}
        />
      )}
      appearance={{
        tabBarBackground: '#F8F8F8',
        shadow: true,
        floating: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <HomeIcon 
           />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel:'Cart',
          tabBarIcon: () => <CartIcon/>,
          activeTabBarIcon: () => <CartIcon/>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <ProfileIcon />,
          activeTabBarIcon: () => <ProfileIcon />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  </View>
  )
}