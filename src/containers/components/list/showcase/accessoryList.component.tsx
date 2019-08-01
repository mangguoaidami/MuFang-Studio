import React from 'react';
import { ListRenderItemInfo, Text, StyleSheet } from 'react-native';
import {
  List,
  ListItem,
  ListItemProps,
  ListProps,
  Button,
  ButtonProps,
  ModalProps,
} from '@kitten/ui';
import { StarIconFill } from '@src/assets/icons';
import { BottomEndTooltip } from '../../tooltip/showcase';
import { ModalShowcase } from './../../modal/showcase/modalShowcase.component';


interface ListItemModel {
  title: string;
  description: string;
  appearanceStatus: string;
}

type ListElement = React.ReactElement<ListProps>;
type ListItemElement = React.ReactElement<ListItemProps>;
type ButtonElement = React.ReactElement<ButtonProps>;
type ModalElement = React.ReactElement<ModalProps>;

export const AccessoryList = (): ListElement => {

  const data: ListItemModel[] = Array(4).fill({
    title: 'WechatAAA',
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
  
  const renderAccessory = (): ModalElement => {
    return (
      <ModalShowcase
        style={styles.modal}
        backdropStyle={styles.backdropStyle}
        allowBackdrop={true}
      />
    );
  };

  const renderItem = (info: ListRenderItemInfo<ListItemModel>): ListItemElement => {
    const { title, description, appearanceStatus } = info.item;

    return (
      <ListItem
        title={title}
        description={description}
        icon={StarIconFill}
        accessory={renderAccessory.bind(this, {appearance: appearanceStatus})}
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
});