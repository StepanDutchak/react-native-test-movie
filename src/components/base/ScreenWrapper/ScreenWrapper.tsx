import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';

import ScreenHeader from './ui/ScreenHeader/ScreenHeader';

import {styles} from './styles';

interface ScreenWrapperProp {
  children: React.ReactNode;
  isScrollable?: boolean;
  contentStyle?: object;
  headerTitle?: string;
  additionalHeaderIcon?: () => React.ReactNode;
  isHeader?: boolean;
  containerStyle?: object;
}

const ScreenWrapper = ({
  children,
  isScrollable,
  contentStyle,
  containerStyle,
  headerTitle,
  additionalHeaderIcon,
  isHeader = true,
}: ScreenWrapperProp) => {
  const Container = isScrollable ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.container]}>
      <Container
        contentContainerStyle={[styles.contentContainer, containerStyle]}
        style={[styles.content, contentStyle]}
        showsVerticalScrollIndicator={false}>
        {isHeader && (
          <ScreenHeader
            additionalHeaderIcon={additionalHeaderIcon}
            title={headerTitle}
          />
        )}
        <View>{children}</View>
      </Container>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
