import React from 'react';

import {colors} from '@constants/colors';
import {Checkbox} from 'react-native-paper';
import {View} from 'react-native';

interface ICheckboxProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  label: string;
}

const CheckBoxPaper = ({checked, setChecked, label}: ICheckboxProps) => {
  return (
    <View>
      <Checkbox.Item
        color={colors.primaryAccent}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        label={label}
        position="leading"
      />
    </View>
  );
};

export default CheckBoxPaper;
