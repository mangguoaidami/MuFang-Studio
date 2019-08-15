import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import { Showcase } from '../common/showcase.component';
import { ShowcaseSection } from '../common/showcaseSection.component';
import {
  AccessoryList,
  IconList,
  PlainList,
} from './showcase';
import {
  StyledComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {Agenda} from 'react-native-calendars';

interface State {
  isStudent: boolean;
  items: any;
}

type ComponentProps = NavigationScreenProps & StyledComponentProps;

class ListContainerComponent extends React.Component<ComponentProps> {
  public state: State = {
    isStudent: true,  //if学生用户?
    items: {},
  };


  public render(): React.ReactNode {
    const { themedStyle, navigation } = this.props;
    return (
      <Showcase>
        <ShowcaseSection title='My Course Plan'>
          {/* <AccessoryList /> */}
          {(this.state.isStudent)?<View style={{ height: 380}}>
            {/* <Text style={themedStyle.text}>sadasd</Text> */}
            <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)} //变更月份获取月份数据
            selected={new Date()}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            // markingType={'period'}
            // markedDates={{
            //    '2017-05-08': {textColor: '#666'},
            //    '2017-05-09': {textColor: '#666'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
            //    '2017-05-22': {endingDay: true, color: 'gray'},
            //    '2017-05-24': {startingDay: true, color: 'gray'},
            //    '2017-05-25': {color: 'gray'},
            //    '2017-05-26': {endingDay: true, color: 'gray'}}}
            // monthFormat={'yyyy'}
            // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          />
          </View>:<AccessoryList />}
          
        </ShowcaseSection>
        
      </Showcase>
    );
  }

  loadItems(day) {
    console.log('当前月份：', day.month);
    console.log('items-',this.state.items)

    //某个月时间段安排上课时间天(array)
    let dateArray = [
      {date: '2019-07-21', time: '09:20', courseName: '艺术'},
      {date: '2019-07-31', time: '09:20', courseName: '音乐'},
      {date: '2019-08-21', time: '09:20', courseName: '形体'},
      {date: '2019-09-21', time: '09:20', courseName: '舞蹈'}
    ]

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          // const numItems = Math.floor(Math.random() * 5);
          // for (let j = 0; j < numItems; j++) {
          //   console.log('strTime', strTime)
          //   this.state.items[strTime].push({
          //     name: '课程时间为 ' + strTime,
          //     height: Math.max(50, Math.floor(Math.random() * 150))
          //   });
          // }
          /**
           * 处理添加备注的时间点--2019-08-08
           */
          dateArray.forEach(el=> {
            if(strTime == el.date){
              this.state.items[el.date].push({
                name: `课程时间为: ${el.date} ${el.time} \n 课程：${el.courseName}`,
                height: Math.max(50, Math.floor(Math.random() * 150))
              });
            }
          });
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[this.props.themedStyle.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={this.props.themedStyle.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}


export const ListContainer = withStyles(ListContainerComponent, (theme: ThemeType) => ({
  text: {
    color: '#ccc'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
}));
