import './App.css';
import Body from './Component/Body';
import Head from './Component/Head';
import store from './Utils/Store';
import { Provider } from 'react-redux';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainContainer from './Component/MainContainer';
import WatchPage from './Component/WatchPage';
const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children:[
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "/watch",
      element: <WatchPage/>
    }
    
  ]
}]);

function App() {
  return (
    <Provider store={store}>
    <div className="App m-3 mt-0">
      <Head />
      <RouterProvider router={appRouter}>
      <Body className="mt-15"/>
      </RouterProvider>
    </div>
    </Provider>
  );
}




export default App;
