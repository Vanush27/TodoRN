/** @format */

import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Text, Pressable} from 'react-native';
import {useStyles} from './TodoList.useStyles';
import {
  deleteTodoFromFirestore,
  getAllTadoFromFirestore,
  updateTodoInFirestore,
} from '@services/firebase/useFetchData';

import {CheckBoxPaper, DeletePopup, RenderIcon} from '@components/atoms';
import {formatDate} from '@utils';
import ImportantTodo from '../ImportantTodo/Important';
import Icons from '@assets/icon/Icons';
import {colors} from '@constants/colors';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';

import {
  setCurrentEditedTodo,
  setIsEditedTodo,
  setTodoList,
} from '@redux/todoNewSlice/todoNewSlice';
import {TInputData} from 'src/types/todo';

const TodoList = ({navigation}: any) => {
  const todoList = useAppSelector(state => state.todoNewReducer.todoNewList);
  const [checked, setChecked] = useState(true);
  const dispatch = useAppDispatch();
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);

  const {styles} = useStyles();

  const handleCancelDelete = () => {
    setDeletePopupVisible(false);
  };

  const onEditedTodoHandler = (item: any) => {
    dispatch(setIsEditedTodo(true));
    dispatch(setCurrentEditedTodo(item));
    navigation?.navigate('AddTodo', {item});
  };

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

  const toggleCheckbox = async (item: any) => {
    let payload = {
      id: item?.id,
      title: item?.title,
      description: item?.description,
      isImportant: item?.isImportant,
      isCompleted: !item?.isCompleted,
      date: item?.date,
    };

    await updateTodoInFirestore(payload);
    await getTodoFetch();
  };

  const handleDeleteItem = async (item: any) => {
    const id = item?.uniqueId;
    setDeletePopupVisible(false);
    const response = await deleteTodoFromFirestore(id);
    if (response === 200) getTodoFetch();
  };

  const todoItem = ({item}: any) => {
    const {title, date, isCompleted, description, isImportant} = item || {};

    return (
      <View style={styles.containerItem}>
        <View>
          <View style={styles.containerWrapper}>
            <Text
              style={[
                styles.title,
                {
                  textDecorationLine: isCompleted ? 'line-through' : 'none',
                },
              ]}>
              {title}
            </Text>
            <ImportantTodo isImportant={isImportant} />
          </View>

          <Text style={styles.description}>{description}</Text>

          <View style={styles.containerCheck}>
            <CheckBoxPaper
              checked={checked}
              setChecked={() => toggleCheckbox(item)}
              label={''}
            />
          </View>

          <View style={styles.containerTime}>
            <Text style={styles.margin}>{formatDate(date)}</Text>
            <Pressable
              onPress={() => onEditedTodoHandler(item)}
              style={styles.margin}>
              <RenderIcon icon={Icons.EDIT} width={22} height={20} />
            </Pressable>

            <TouchableOpacity onPress={() => setDeletePopupVisible(true)}>
              <RenderIcon icon={Icons.DELETE} fill={colors.red} />
              <DeletePopup
                visible={deletePopupVisible}
                onDelete={() => handleDeleteItem(item)}
                onCancel={handleCancelDelete}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getTodoFetch();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={todoItem}
        keyExtractor={(item, index) => item?.id?.toString() + index}
      />
    </View>
  );
};

export default TodoList;
