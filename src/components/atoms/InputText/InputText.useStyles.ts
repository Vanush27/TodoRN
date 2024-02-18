/** @format */

import {colors} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {},
    input: {
      borderColor: colors.yellow,
      borderRadius: 20,
      borderWidth: 1,
      marginBottom: 10,
      width: '100%',
      fontSize: 13,
      fontWeight: '500',
    },
    error: {
      color: 'red',
      marginTop: 5,
    },
  });

  return {styles};
};
