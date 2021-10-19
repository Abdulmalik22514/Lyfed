import 'react-native-gesture-handler';
import React from 'react';

import Navigator from './src/navigation/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    // <GestureHandlerRootView>
    <Navigator />
    // </GestureHandlerRootView>
  );
};

export default App;
