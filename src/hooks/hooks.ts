import {AppDispatch, RootState} from '@redux/store';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch<RootState>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
