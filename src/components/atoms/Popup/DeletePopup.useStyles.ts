/** @format */

import {colors} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    wrapper: {backgroundColor: colors.white, padding: 20, borderRadius: 10},
    headerTitle: {fontSize: 18, marginBottom: 20},
    delete: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
    },
    deleteText: {
      color: 'white',
    },
    onCancel: {backgroundColor: 'gray', padding: 10, borderRadius: 5},
  });

  return {styles};
};
