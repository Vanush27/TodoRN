import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';

interface IRenderSocialSite {
  icon: string;
  width?: number;
  height?: number;
  fill?: string;
}
const RenderIcon = ({
  icon,
  width = 24,
  height = 24,
  fill = '#DFBD43',
}: IRenderSocialSite) => {
  return (
    <View>
      <SvgXml xml={icon} width={width} height={height} fill={fill} />
    </View>
  );
};

export default RenderIcon;
