import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';

import MainStack from './MainStack/MainStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainNavigationOptions} from '../config/navigation';
import {StackNavigationEnums} from '../constants/enums/navigation';

const StackNavigation = createNativeStackNavigator();

const Navigation = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
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
