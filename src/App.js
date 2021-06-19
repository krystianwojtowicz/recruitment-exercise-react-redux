import { Provider } from 'react-redux';

import Form from './Form';
import './App.css';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Form />
      </div>
    </Provider>
  );
}

export default App;

