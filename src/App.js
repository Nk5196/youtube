import './App.css';
import Body from './Component/Body';
import Head from './Component/Head';
import store from './Utils/Store';
import { Provider } from 'react-redux';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


function App() {
  return (
    <Provider store={store}>
    <div className="App m-3 mt-0">
   

      <Head />
      <Body className="mt-15"/>
    
    </div>
    </Provider>
  );
}




export default App;
