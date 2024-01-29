import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MainStack from './MainStack/MainStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigationOptions} from '../config/navigation';
import {StackNavigationEnums} from '../constants/enums/navigation';

const StackNavigation = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          name={StackNavigationEnums.MAIN}
          component={MainStack}
          options={MainNavigationOptions}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export {Navigation};
