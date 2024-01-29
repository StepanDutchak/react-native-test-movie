import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import {SearchIcon} from '@icons';

interface IScreenHeader {
  title?: string;
  additionalHeaderIcon?: () => React.ReactNode;
}

const ScreenHeader = ({title, additionalHeaderIcon}: IScreenHeader) => (
  <View style={styles.container}>
    <Text style={styles.headerTitle}>{title}</Text>
    <View style={styles.rightContent}>
      {additionalHeaderIcon && additionalHeaderIcon()}
      <SearchIcon />
    </View>
  </View>
);

export default React.memo(ScreenHeader);
