/** @format */

import {colors} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    text: {
      fontSize: 30,
      color: colors.primaryAccent,
    },
  });

  return {styles};
};
