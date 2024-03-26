/** @format */

import React, {useState} from 'react';
import {View, Pressable, Text} from 'react-native';
import {InputText} from '../../components/atoms';

import {useFormTodo} from '@redux/formSlice/useFormTodo';

import {
  addTaskToFirestore,
  getAllTadoFromFirestore,
  updateTodoInFirestore,
} from '@services/firebase/useFetchData';

import {useStyles} from './AddTodo.useStyles';
import ImportantTodo from '@components/molecule/ImportantTodo/Important';

import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {setTodoList} from '@redux/todoNewSlice/todoNewSlice';

const AddTodo = ({navigation, route}: any) => {
  const isEditedTodo = useAppSelector(
    state => state.todoNewReducer.isEditedTodo,
  );

  const currentEditedTodo = useAppSelector(
    state => state.todoNewReducer.currentEditedTodo,
  );

  const {styles} = useStyles();

  const {title, description, isImportant} = useFormTodo();

  const dispatch = useAppDispatch();

  const [inputTitle, setInputTitle] = useState(
    isEditedTodo ? currentEditedTodo?.title : title,
  );

  const [inoutDescription, setInputDescription] = useState(
    isEditedTodo ? currentEditedTodo?.description : description,
  );

  const [inputImportant, setInputImportant] = useState(
    isEditedTodo ? currentEditedTodo?.isImportant : isImportant,
  );

  const getTodoFetch = async () => {
    try {
      const todoFetch: any = [];
      const result = await getAllTadoFromFirestore();
      Object.keys(result)?.forEach(uniqueId => {
        todoFetch.push({...result[uniqueId], uniqueId});
      });
      dispatch(setTodoList(todoFetch));
    } catch {
      console.log(`error getTodoFetch`);
    }
  };

  const handleAddTask = async () => {
    if (isEditedTodo) {
      let payload = {
        id: currentEditedTodo?.id,
        title: inputTitle,
        description: inoutDescription,
        isImportant: inputImportant,
        isCompleted: currentEditedTodo?.isCompleted,
        date: currentEditedTodo?.date,
      };
      await updateTodoInFirestore(payload);
    } else {
      let payload = {
        id: Number(Math.floor(Math.random() * 6) + 1),
        title: inputTitle,
        description: inoutDescription,
        isImportant: inputImportant,
        isCompleted: false,
        date: new Date(),
      };

      await addTaskToFirestore(payload);
    }
    await getTodoFetch();
    if (inputTitle && inoutDescription) {
      setInputTitle(null);
      setInputImportant(null);
      setInputDescription(null);
      //

      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.important}>
        <ImportantTodo
          onChangeText={setInputImportant}
          isImportant={inputImportant}
        />
      </View>

      <InputText
        description={inputTitle}
        placeholder={'Title'}
        onChangeText={setInputTitle}
      />

      <InputText
        description={inoutDescription}
        placeholder={'Description'}
        onChangeText={setInputDescription}
        padding={30}
      />

      <Pressable style={styles.button} onPress={handleAddTask}>
        <Text style={styles.text}>{isEditedTodo ? 'Edit' : 'Add'}</Text>
      </Pressable>
    </View>
  );
};

export default AddTodo;
