'use strict';

import React,{
  Component,
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

import Moment from 'moment';
import DayItem from './components/DayItem';

class WeekDays extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    )
  }

  days() {
    let daysItems = [];
    for (var i =0; i< 7; i++) {
      let day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }
    return daysItems;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('weekdays', () => WeekDays);
