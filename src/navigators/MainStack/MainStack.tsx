import React from 'react';

import {ScreenNavigationEnums} from '../../constants/enums/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigationOptions} from '../../config/navigation';
import {HomeScreen, LoadingScreen, PlayerScreen} from 'screens';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={MainNavigationOptions}>
      <Stack.Screen
        name={ScreenNavigationEnums.LOADING_SCREEN}
        component={LoadingScreen}
      />
      <Stack.Screen
        name={ScreenNavigationEnums.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        name={ScreenNavigationEnums.PLAYER_SCREEN}
        component={PlayerScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
