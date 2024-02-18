/** @format */

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TBottomTabNavigation} from '../../types/navigation';
import {Home, Settings} from '@screens';
import {colors} from '@constants/colors';
import Icons, {HOME_ACTIVE} from '@assets/icon/Icons';
import RenderIcon from '@components/atoms/Icon/RenderIcon';

const Tab = createBottomTabNavigator<TBottomTabNavigation>();

const BottomNavigation = () => {
  const screenOptions = {
    headerShown: false,
    tabBarBadgeStyle: {
      backgroundColor: 'transparent',
    },
    tabBarActiveTintColor: colors.primaryAccent,
    tabBarInactiveTintColor: colors.icon,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({focused}) => {
            return focused ? (
              <RenderIcon icon={Icons.HOME_ACTIVE} />
            ) : (
              <RenderIcon icon={Icons.HOME} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',

          tabBarIcon: ({focused}) => {
            return focused ? (
              <RenderIcon icon={Icons.SETTINGS_ICON} />
            ) : (
              <RenderIcon icon={Icons.SETTING} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
