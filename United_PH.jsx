import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';



// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.18.5

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Making a change for the people!
        </Text>
         <Card title="Local Modules">

</Card>
       </View>
     );
   }
    }


const styles = StyleSheet.create({
 container: {
    flex: 1,
   alignItems: 'center',
     justifyContent: 'center',
     paddingTop: Constants.statusBarHeight,
     backgroundColor: '#ecCFf1',
   },
   paragraph: {
     margin: 24,
     fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
     color: '#34495e',
   },
 });


