
import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import Home from './Home';
import { AppProvider } from '@shopify/polaris';
import { Provider } from 'react-redux'
import { Store } from './Redux/Store';
function App() {
  return (
    <div className="App">
      <AppProvider>
        <Provider store={Store}>
          <Home />
        </Provider>
      </AppProvider>
    </div>
  );
}

export default App;

