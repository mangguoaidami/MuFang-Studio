import React from 'react';
import { ListRenderItemInfo, Text, StyleSheet, View } from 'react-native';
import {
  List,
  ListItem,
  ListItemProps,
  ListProps,
  Button,
  ButtonProps,
  ModalProps,
  Avatar,
  AvatarProps,
} from '@kitten/ui';
import { StarIconFill } from '@src/assets/icons';
import { BottomEndTooltip } from '../../tooltip/showcase';
import { ModalShowcase } from './../../modal/showcase/modalShowcase.component';


interface ListItemModel {
  title: string;
  avatar: string;
  description: string;
  appearanceStatus: string;
}

type ListElement = React.ReactElement<ListProps>;
type ListItemElement = React.ReactElement<ListItemProps & AvatarProps>;
type ButtonElement = React.ReactElement<ButtonProps>;
type ModalElement = React.ReactElement<ModalProps>;

export const AccessoryList = (): ListElement => {

  const data: ListItemModel[] = Array(4).fill({
    title: 'WechatAAA',
    avatar: 'https://akveo.github.io/react-native-ui-kitten/docs/assets/img/akveo-logo.png',
    description: [
      'Once upon a time when pigs spoke rhyme',
      // 'and monkeys chewed tobacco...',
      'surplus: 31'
    ].join(' '),
    appearanceStatus: 'outline',
  });
  let appearanceStatus = 'outline'

  // const renderAccessory = (): React.ReactElement<any> => {
  //   return BottomEndTooltip({ indicatorOffset: 12 });
    
  // };
  // const BackdropCloseModal = (): ModalElement => {
  //   return (
  //     <ModalShowcase
  //       style={styles.modal}
  //       backdropStyle={styles.backdropStyle}
  //       allowBackdrop={true}
  //     />
  //   );
  // };
  const data1 = {
    photo: '',
    about: 'Hi! My name is Jennifer. I\'m 25 and I live in Berlin.' +
      ' I\'m interested in computer science, music, sport and fantasy literature',
    firstName: 'Jennifer',
    lastName: 'Green111',
    gender: 'Gender.FEMALE',
    age: 25,
    weight: 48,
    height: 174,
    inseam: 45,
    email: 'jen.green@gmail.com',
    phoneNumber: '+375 44 846 97 68',
    location: 'Berlin, Germany',
    friends: [],
    onLine: true,
  };
  
  const renderAccessory = (title, avatar, description, appearanceStatus): ModalElement => {
    return (
      <ModalShowcase
        style={styles.modal}
        backdropStyle={styles.backdropStyle}
        allowBackdrop={true}
        profile={data1}
      />
    );
  };

  const renderIcon = (itemArray: any): any => {
    return (
      <View style={styles.avatarBoxer}>
        {/* <Text>{ itemArray.avatar }</Text> */}
        <Avatar source={ {uri: itemArray.avatar} }/>
      </View>
    )
  }

  const renderItem = (info: ListRenderItemInfo<ListItemModel>): ListItemElement => {
    const { title, avatar, description, appearanceStatus } = info.item;

    return (
      <ListItem
        title={title}
        description={description}
        // icon={StarIconFill}
        icon={renderIcon.bind(this, {avatar: avatar})}
        accessory={renderAccessory.bind(this, {appearanceStatus: appearanceStatus, title: title, avatar: avatar, description: description })}
        // onPress={()=> {
        //   console.log('okey')
        // }}
      />
    );
  };

  return (
    <List
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 200,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  backdropStyle: {
    backgroundColor: 'black',
    opacity: 0.5,
  },
  avatarBoxer: {
    // backgroundColor: '#cccccc',
    // borderRadius: 5,
    // width: 50,
    // height: 50,
  },
});