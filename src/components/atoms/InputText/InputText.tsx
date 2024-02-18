/** @format */

import React from 'react';
import {View, TextInput} from 'react-native';

import {useStyles} from './InputText.useStyles';

interface IInputText {
  description: string;
  placeholder: string;
  padding?: number;
  onChangeText: (text: string) => void;
}
const InputText = ({
  description,
  onChangeText,
  placeholder,

  padding = 20,
}: IInputText) => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={description}
        onChangeText={text => onChangeText(text)}
        style={[styles.input, {padding: padding}]}
      />
    </View>
  );
};

export default InputText;
