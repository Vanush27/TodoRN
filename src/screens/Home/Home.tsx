/** @format */

import React, {useState} from 'react';
import {View} from 'react-native';

import {ImagesAssets} from '@assets/images/ImagesAssets';
import {CheckBoxPaper, RoundButton} from '@components/atoms';
import {TodoList} from '@components/molecule';
import {
  setCurrentEditedTodo,
  setIsEditedTodo,
  setTodoList,
} from '@redux/todoNewSlice/todoNewSlice';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {getAllTadoFromFirestore} from '@services/firebase/useFetchData';

import {useStyles} from './Home.useStyles';

const Home = ({navigation}: any) => {
  const {styles} = useStyles();
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(state => state.todoNewReducer.todoNewList);

  const [checked, setChecked] = useState({
    allData: true,
    importantData: false,
  });

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

  const handleFilterImportantTodo = () => {
    setChecked({allData: false, importantData: true});
    const filterTodo = todoList?.filter(todo => todo?.isImportant);
    dispatch(setTodoList(filterTodo));
  };

  const handleFilterAllData = async () => {
    setChecked({allData: true, importantData: false});
    await getTodoFetch();
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <CheckBoxPaper
          checked={checked?.importantData}
          setChecked={handleFilterImportantTodo}
          label="Important"
        />

        <CheckBoxPaper
          checked={checked?.allData}
          setChecked={handleFilterAllData}
          label="All ToDo"
        />
      </View>

      <View style={styles.wrapperTop}>
        <TodoList navigation={navigation} />
      </View>

      <View style={styles.wrapperBottom}>
        <RoundButton
          onPress={() => {
            dispatch(setIsEditedTodo(false));
            dispatch(setCurrentEditedTodo(null));
            navigation.navigate('AddTodo');
          }}
          imageSource={ImagesAssets.plus_btn}
        />
      </View>
    </View>
  );
};

export default Home;
