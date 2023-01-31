import './assets/styles/main.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import Routing from './components/Routing';


function App() {
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  );
}

export default App;
