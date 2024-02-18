/** @format */

import {colors} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    important: {
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      paddingRight: 16,
      paddingBottom: 16,
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 15,
      elevation: 6,
      backgroundColor: colors.yellow,
    },
    text: {
      fontSize: 18,
      lineHeight: 24,
      fontWeight: 'bold',
      color: colors.white,
    },
  });

  return {styles};
};
