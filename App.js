import { StatusBar } from 'expo-status-bar';
import { } from 'react-native';
import Main from './screens/main';
import { Provider } from 'react-redux';
import { MyStore } from './componet/reduxtoolkit/mystore';
export default function App() {
  return (
    //<LoginScreen/>
    // <SignUp/>
   <Provider store={MyStore}>
         <Main/>
   </Provider>

  );
}
