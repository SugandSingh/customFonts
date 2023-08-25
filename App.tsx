//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Roboto-Black'}}>Roboto-Black</Text>
      <Text style={{fontFamily: 'Roboto-BlackItalic'}}>Roboto-BlackItalic</Text>
      <Text style={{fontFamily: 'Roboto-Bold'}}>Roboto-Bold</Text>
      <Text style={{fontFamily: 'Roboto-BoldItalic'}}>Roboto-BoldItalic</Text>
      <Text style={{fontFamily: 'Roboto-Italic'}}>Roboto-Italic</Text>
      <Text style={{fontFamily: 'Roboto-LightItalic'}}>Roboto-LightItalic</Text>
      <Text style={{fontFamily: 'Roboto-Light'}}>Roboto-Light</Text>
      <Text style={{fontFamily: 'Roboto-Medium'}}>Roboto-Medium</Text>
      <Text style={{fontFamily: 'Roboto-MediumItalic'}}>
        Roboto-MediumItalic
      </Text>
      <Text style={{fontFamily: 'Roboto-Regular'}}>Roboto-Regular</Text>
      <Text style={{fontFamily: 'Roboto-Thin'}}>Roboto-Thin</Text>
      <Text style={{fontFamily: 'Roboto-ThinItalic'}}>Roboto-ThinItalic</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default App;
