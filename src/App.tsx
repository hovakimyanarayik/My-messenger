import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import AppWrapper from './components/AppWrapper';
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppWrapper>
          <Routes />
        </AppWrapper>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
