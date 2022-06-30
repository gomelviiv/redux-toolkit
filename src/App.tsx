import * as React from 'react';
import { Provider } from 'react-redux';

import TodoList from '@pages/TodoList';
import store from '@redux/store';


import './style.scss';

const App: React.FC  = ()=> {
  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
    )
  
}
export default App;
