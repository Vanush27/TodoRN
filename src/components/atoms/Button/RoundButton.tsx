/** @format */

import React from 'react';
import {TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import {useStyles} from './RoundButton.useStyles';

interface IRoundButtonProps {
  onPress: () => void;
  imageSource: ImageSourcePropType | undefined;
}

const RoundButton = ({onPress, imageSource}: IRoundButtonProps) => {
  const {styles} = useStyles();
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={imageSource} />
    </TouchableOpacity>
  );
};

export default RoundButton;
