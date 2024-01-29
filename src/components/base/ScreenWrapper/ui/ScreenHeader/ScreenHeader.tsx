import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
import {SearchIcon} from '@icons';

interface IScreenHeader {
  title?: string;
  additionalHeaderIcon?: () => React.ReactNode;
  // subtitle?: string;
}

const ScreenHeader = ({title, additionalHeaderIcon}: IScreenHeader) => (
  <View style={styles.container}>
    <Text style={styles.headerTitle}>{title}</Text>
    <View style={styles.rightContent}>
      {additionalHeaderIcon && additionalHeaderIcon()}
      <SearchIcon />
    </View>

    {/* {subtitle && <Text style={styles.subtitlePageStyle}>{subtitle}</Text>} */}
  </View>
);

export default React.memo(ScreenHeader);
