import React from "react";

import{
  Text,
  View,
  SafeAreaView,
  StyleSheet

} from 'react-native';

function App(){
  return(
    <SafeAreaView>
      <View>
        <Text style={styles.coloredText}>hello Hi!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  coloredText: {
    color: 'white',
    fontSize: 24,
  },
});

export default App;