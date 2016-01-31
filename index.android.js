'use strict';

import React,{
  Component,
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

import DayItem from './components/DayItem'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday']

class WeekDays extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
        <DayItem />
      </View>
    )
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
