'use strict';

import React,{
  Component,
  AppRegistry,
  View,
  Text
} from 'react-native';

class WeekDays extends Component {
  render () {
    return (
      <View>
        <Text>
          Days of the week:
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('weekdays', () => WeekDays);
