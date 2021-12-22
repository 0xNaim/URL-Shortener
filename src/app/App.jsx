import {
  Route,
  Routes
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Shortener from '../pages/shortener/Shortener';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/short" element={<Shortener />} />
    </Routes>
  </Layout>
);
export default App;
