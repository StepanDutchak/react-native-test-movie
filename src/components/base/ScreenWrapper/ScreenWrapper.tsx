import React, {useCallback} from 'react';
import {ScrollView, View, SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ScreenRouteProp} from '../../../types/navigation';
import {AnimatedPress} from '../../base';
import ScreenHeader from './ui/ScreenHeader/ScreenHeader';

import {styles} from './styles';

interface ScreenWrapperProp {
  children: React.ReactNode;
  isScrollable?: boolean;
  isGoBack?: boolean;
  contentStyle?: object;
  headerContainerStyle?: object;
  titlePage?: string;
  handleGoBack?: () => void;
}

const ScreenWrapper = ({
  children,
  isScrollable,
  isGoBack,
  contentStyle,
  headerContainerStyle,
  titlePage,
  handleGoBack,
}: ScreenWrapperProp) => {
  const navigation = useNavigation<ScreenRouteProp>();

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const Container = isScrollable ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.container]}>
      <Container
        contentContainerStyle={styles.contentContainer}
        style={[styles.content, contentStyle]}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.headerPageContainer, headerContainerStyle]}>
          {isGoBack && (
            <AnimatedPress
              containerStyle={styles.backIconContainer}
              onPress={handleGoBack || handleBack}>
              <Text>{'<'}</Text>
            </AnimatedPress>
          )}
          <ScreenHeader title={titlePage} />
        </View>
        <View>{children}</View>
      </Container>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
