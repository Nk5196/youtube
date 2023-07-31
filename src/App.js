import './App.css';
import Body from './Component/Body';
import Head from './Component/Head';
import store from './Utils/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div className="App m-3">
      <Head/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
