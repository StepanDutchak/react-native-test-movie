import React, {useCallback, useRef} from 'react';
import {
  Pressable,
  Animated,
  ActivityIndicator,
  LayoutChangeEvent,
} from 'react-native';
import styles from './styles';

const PRESS_DURATION = 100;
const DEFAULT_SCALE = 0.98;

interface AnimatedPressProp {
  disabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
  onLayout?: (l: LayoutChangeEvent) => void;
  style?: object;
  containerStyle?: object;
  isLoading?: boolean;
}

interface AnimatedPressWithTestIDProp extends AnimatedPressProp {
  testID?: string;
}

const AnimatedPress = ({
  children,
  style,
  containerStyle,
  disabled,
  isLoading,
  onLayout,
  onPress,
  testID,
}: AnimatedPressWithTestIDProp) => {
  const animScale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.timing(animScale, {
      useNativeDriver: false,
      toValue: DEFAULT_SCALE,
      duration: PRESS_DURATION,
    }).start();
  }, [animScale]);

  const pressOut = useCallback(() => {
    Animated.timing(animScale, {
      useNativeDriver: false,
      toValue: 1,
      duration: PRESS_DURATION,
    }).start();
  }, [animScale]);

  return (
    <Pressable
      disabled={disabled || isLoading}
      style={containerStyle}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      testID={testID}>
      <Animated.View
        onLayout={onLayout}
        style={[
          style,
          isLoading && styles.loadingProcess,
          {transform: [{scale: animScale}]},
        ]}>
        {isLoading ? <ActivityIndicator /> : children}
      </Animated.View>
    </Pressable>
  );
};

export default React.memo(AnimatedPress);
