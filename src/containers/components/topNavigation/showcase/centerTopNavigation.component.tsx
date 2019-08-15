import React from 'react';
import { Alert } from 'react-native';
import {
  TopNavigation,
  TopNavigationProps,
  TopNavigationAction,
  TopNavigationActionProps,
} from '@kitten/ui';
import {
  StarIconFill,
  ArrowIosBackFill,
  MoreVerticalIconFill,
} from '@src/assets/icons';

type TopNavigationElement = React.ReactElement<TopNavigationProps>;
type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;

export const CenterTopNavigation = (props?: TopNavigationProps): TopNavigationElement => {
  return (
    <TopNavigation
      {...props}
      alignment='center'
      title='Setting'
      // subtitle='Subtitle'
      leftControl={renderLeftControl()}
      rightControls={renderRightControls()}
    />
  )
};

const renderLeftControl = (): TopNavigationActionElement => {
  return (
    <TopNavigationAction icon={ArrowIosBackFill} onPress={()=>console.log('ok')} />
  );
};

const renderRightControls = (): TopNavigationActionElement[] => {
  return ([
    <TopNavigationAction icon={StarIconFill}/>,
    <TopNavigationAction icon={MoreVerticalIconFill}/>,
  ]);
};
