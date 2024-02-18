import axios from 'axios';
import {FIREBASE_PATH} from '../instance';
import {TInputData} from 'src/types/todo';

export const getAllTadoFromFirestore = async () => {
  try {
    const response = await axios.get(FIREBASE_PATH);
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
  }
};

export const deleteTodoFromFirestore = async (id: string) => {
  try {
    const response = await axios.delete(
      `${'https://testtask-d241e-default-rtdb.firebaseio.com'}/todos/${id}.json`,
    );
    return response?.status;
  } catch (error) {
    console.error('Error deleting task: ', error);
  }
};

export const updateTodoInFirestore = async (payload: any) => {
  try {
    const response = await axios.patch(
      `${'https://testtask-d241e-default-rtdb.firebaseio.com'}/todos/${
        payload.id
      }.json`,
      payload,
    );
    console.log('Response from PATCH request:', response.data);
  } catch (error) {
    console.error('Error updating document:', error);
  }
};

export const addTaskToFirestore = async (inputData: TInputData) => {
  try {
    await axios.post(FIREBASE_PATH, {
      ...inputData,
    });
  } catch (error) {
    console.error('Error posting data:', error);
  }
};
