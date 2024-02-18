/** @format */

import type {StackScreenProps} from '@react-navigation/stack';

export type TApplicationStackParamList = {
  BottomNavigation: undefined;
  AddTodo: undefined;
};

export type TBottomTabNavigation = {
  Home: undefined;
  Settings: undefined;
};

export type ApplicationScreenProps = StackScreenProps<
  TApplicationStackParamList | TBottomTabNavigation
>;
