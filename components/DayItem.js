'use strict';

import React,{
  Component,
  Text,
  StyleSheet
} from 'react-native'

export default class DayItem extends Component {
  render() {
    return (
      <Text style={styles.day}>
        A day of the week
      </Text>
    )
  }
};

const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
})
