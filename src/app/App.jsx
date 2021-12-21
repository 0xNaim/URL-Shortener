import { Grid } from '@mui/material';
import {
  useEffect,
  useState
} from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import Shortener from '../pages/shortener/Shortener';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: '100vh'
          }}
        >
          <HashLoader
            color="#36D7B7"
            loading={loading}
            size={50}
          />
        </Grid>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/short" element={<Shortener />} />
          </Routes>
        </Layout>
      )}
    </div>
  );
};
export default App;
