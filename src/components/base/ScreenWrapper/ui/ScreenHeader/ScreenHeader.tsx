import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';

interface IMainHeader {
  title?: string;
  subtitle?: string;
}

const ScreenHeader = ({title, subtitle}: IMainHeader) => (
  <View style={styles.headerContainer}>
    <Text style={styles.titlePageStyle}>{title}</Text>
    {subtitle && <Text style={styles.subtitlePageStyle}>{subtitle}</Text>}
  </View>
);

export default React.memo(ScreenHeader);
