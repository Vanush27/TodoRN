/** @format */
import React from 'react';
import {Text, View} from 'react-native';

import Icons from '@assets/icon/Icons';

import {useStyles} from './Settings.useStyles';
import {RenderIcon} from '@components/atoms';

const Settings = () => {
  const {styles} = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page under construction</Text>
      <RenderIcon icon={Icons.SETTING_PAGE} width={300} height={300} />
    </View>
  );
};

export default Settings;
