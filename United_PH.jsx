import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, Image,TouchableOpacity } from 'react-native';
// Unirest,
import { Constants, Google } from 'expo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.18.5

export default class App extends Component {

 
  
  
 _handleButtonPress = () => {
   Alert.alert(
     'SIREN and the Rapid Responders Network has been notified!',
     'Aid is on their way!',
     'Remember your rights. Being Silent is your right!',
   );
   
 };
 _rightButtonPress = () => {
      Alert.alert(
        'know your rights',
        'follow the following link: https://github.com/JenD24/Unidos_PH2/blob/master/know_your_rights.png?raw=true '

   );
 };
 
 _handleGoogleLogin = async () => {
   try {
     const { type, user } = await Google.logInAsync({
       androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
       iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
       androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
       iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
       scopes: ['profile', 'email']
     });

     switch (type) {
       case 'success': {
         Alert.alert(
           'Logged in!',
           `Hi ${user.name}!`,
         );
         break;
       }
       case 'cancel': {
         Alert.alert(
           'Cancelled!',
           'Login was cancelled!',
         );
         break;
       }
       default: {
         Alert.alert(
           'Oops!',
           'Login failed!',
         );
       }
     }
   } catch (e) {
     Alert.alert(
       'Oops!',
       'Login failed!',
     );
   }
 };

 render() {
   return (
 
     <View style={styles.container}>
     // Logo
       <Image style={styles.logo} source={{ uri: 'https://raw.githubusercontent.com/JenD24/Unidos_PH2/master/unidos-website-header.png' }}
         style={{ height: 200, width: 350 }}/>
       <Text style={styles.paragraph}>
         Making a change for the people!
       </Text>
      // Button 
     
       <Button
         title="AYUDA IMMEDIATE // IMMEDIATE HELP"
         onPress={this._handleButtonPress}
       />
     // Google
       <Button
         title="Login with Google // Entre con Google"
         onPress={this._handleGoogleLogin}
       />
       //
          <Button
         title="Know your rights // Sepa sus derechos "
         onPress={this._rightButtonPress}
       />
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
  backgroundColor: '#ffff',
},
paragraph: {
  margin: 24,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#34495e',
},
 button: {
  backgroundColor: '#566',
  color:'#85c68c',
  padding: 5,
  margin: 5,
}
});
