import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {bonjour, bonjourFunction} from "../shared/sharedConstants";
// import {SharedClass} from "../shared/SharedClass";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const text = bonjourFunction()
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Text>{bonjour}</Text>
      <Text>{text}</Text>
      {/*<Text>{SharedClass.greeting}</Text>*/}
      <Text></Text>
    </SafeAreaView>
  );
}

export default App;
