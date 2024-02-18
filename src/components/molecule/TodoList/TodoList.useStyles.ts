/** @format */

import {colors} from '@constants/colors';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    containerItem: {
      padding: 20,
      marginVertical: 10,
      borderRadius: 20,
      backgroundColor: colors.backgroundColor,
    },
    containerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
    },
    description: {
      fontSize: 16,
      fontWeight: '300',
    },
    containerCheck: {
      alignItems: 'flex-end',
      width: '100%',
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    containerTime: {
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
    margin: {marginRight: 16},
  });

  return {styles};
};
