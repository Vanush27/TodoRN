/** @format */

import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    container: {flex: 1, paddingTop: 60, margin: 16},
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    wrapperTop: {
      flex: 0.9,
      alignItems: 'center',
    },
    wrapperBottom: {
      flex: 0.1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 10,
    },
  });

  return {styles};
};
