import {StyleSheet} from 'react-native';
import themes from '../../../theme/colors';

export const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  contentContainer: {
    // paddingBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: themes.dark.BLACK,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  headerPageContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backIconContainer: {
    zIndex: 100,
    position: 'absolute',
    left: 0,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
});
