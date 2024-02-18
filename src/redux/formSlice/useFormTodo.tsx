import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {setTitle, setDescription, setIsImportant, setError} from './formSlice';

export const useFormTodo = () => {
  const dispatch = useAppDispatch();
  const {title, description, isImportant, error} = useAppSelector(
    state => state.formSlice,
  );

  const dispatchSetTitle = (title: string) => {
    dispatch(setTitle(title));
  };
  const dispatchSetDescription = (description: string) => {
    dispatch(setDescription(description));
  };
  const dispatchIsImportant = (isImportant: boolean) => {
    dispatch(setIsImportant(isImportant));
  };

  return {
    title,
    description,
    isImportant,
    error,

    dispatchSetTitle,
    dispatchSetDescription,
    dispatchIsImportant,
  };
};
