import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import AppWrapper from './components/AppWrapper';

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
