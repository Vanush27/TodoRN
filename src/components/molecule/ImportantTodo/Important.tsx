/** @format */

import React from 'react';
import {TouchableOpacity} from 'react-native';

import {RenderIcon} from '@components/atoms';
import Icons from '@assets/icon/Icons';
import {useFormTodo} from '@redux/formSlice/useFormTodo';

interface IImportantTodo {
  isImportant: boolean;
  onChangeText?: (entity: boolean) => void;
}
const ImportantTodo = ({isImportant, onChangeText}: IImportantTodo) => {
  const {dispatchIsImportant} = useFormTodo();

  const onPress = () => {
    dispatchIsImportant(!isImportant);
    onChangeText?.(!isImportant);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {isImportant ? (
        <RenderIcon icon={Icons.ACTIVE_IMPORTANT} width={30} height={30} />
      ) : (
        <RenderIcon icon={Icons.IMPORTANT} width={30} height={30} />
      )}
    </TouchableOpacity>
  );
};

export default ImportantTodo;
