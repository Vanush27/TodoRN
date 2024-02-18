import {
  AnyAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import formSlice from './formSlice/formSlice';
import todoNewSlice from './todoNewSlice/todoNewSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const rootReducer = combineReducers({
  todoNewReducer: todoNewSlice,
  formSlice: formSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch<T> = ThunkDispatch<T, unknown, AnyAction>;
