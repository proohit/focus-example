import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

function App(): React.JSX.Element {
  const [focused, setFocused] = React.useState(false);

  console.log('focused', focused);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableHighlight
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}>
        <Text>Test</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

export default App;
