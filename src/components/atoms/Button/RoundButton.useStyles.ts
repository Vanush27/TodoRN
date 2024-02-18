/** @format */

import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    image: {
      width: 60,
      height: 60,
      resizeMode: 'cover',
    },
  });

  return {styles};
};
