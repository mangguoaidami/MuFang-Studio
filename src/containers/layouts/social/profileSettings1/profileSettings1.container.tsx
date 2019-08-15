import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { View } from 'react-native'
import { Profile } from '@src/core/model';
import { profile1 } from '@src/core/data/profile';
import { ProfileSettings1 } from './profileSettings1.component';
import {
  CenterTopNavigation,
} from './../../../components/topNavigation/showcase';
import { Showcase } from '../../../components/common/showcase.component';

interface State {
  profile: Profile;
}

export class ProfileSettings1Container extends React.Component<NavigationScreenProps, State> {

  public state: State = {
    profile: profile1,
  };

  private onUploadPhotoButtonPress = () => {
  };

  private onButtonPress = () => {
    this.props.navigation.goBack();
  };
  private setThemePress = () => {
    this.props.navigation.navigate({
      routeName: 'Themes',
      key: 'aaa',
    })
  };

  // private setByInput = () => {
  //   console.log('setByInput');
  // };

  public render(): React.ReactNode {
    return (
      <Showcase>
        <CenterTopNavigation/>
        <ProfileSettings1
          profile={this.state.profile}
          onUploadPhotoButtonPress={this.onUploadPhotoButtonPress}
          onButtonPress={this.onButtonPress}
          setThemePress={this.setThemePress}
          // setByInput={this.setByInput}
        />
      </Showcase>
    );
  }
}
