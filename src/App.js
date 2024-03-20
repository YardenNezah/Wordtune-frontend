import './app.scss';
import Home from './components/pages/Home';
import Plans from './components/pages/Plans';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/general/navBar/NavBar';
import './utils/fonts/general-sans-medium.woff2';
import './utils/fonts/general-sans-regular.woff2';
import './utils/fonts/PPFragment-GlareLightItalic.woff2';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/plans" element={<Plans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
