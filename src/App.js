import React from 'react';
import PlayScreen from './Components/PlayScreen/PlayScreen';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {

  

  window.store = store;
  return (
    <Provider store={store}>
      <PlayScreen store={store}/>
    </Provider>
    
  );
}

export default App;
