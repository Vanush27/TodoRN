import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = () => {
  const getItem = async (key: string): Promise<string | null> => {
    return await AsyncStorage.getItem(key);
  };
  const setItem = async (key: string, value: string): Promise<void> => {
    return await AsyncStorage.setItem(key, value);
  };
  const removeItem = async (key: string): Promise<void> => {
    return await AsyncStorage.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};
