import React from 'react';

import {styles} from './styles';
import {LockIcon} from '@icons';
import {View} from 'react-native';

const LockBlurBlock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lockContainer}>
        <View style={styles.blur} />
        <LockIcon />
      </View>
    </View>
  );
};

export default React.memo(LockBlurBlock);
