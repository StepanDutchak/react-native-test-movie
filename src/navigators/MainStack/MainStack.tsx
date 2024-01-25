import React from 'react';

import {HomeScreen} from '../../screens';
import {ScreenNavigationEnums} from '../../constants/enums/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigationOptions} from '../../config/navigation';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={MainNavigationOptions}>
      <Stack.Screen
        name={ScreenNavigationEnums.HOME_SCREEN}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
