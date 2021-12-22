import {
  Grid,
  useTheme
} from '@mui/material';
import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
  const theme = useTheme();

  return (
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
        color={theme.palette.mode === 'light' ? '#1976d2' : '#36D7B7'}
        size={50}
      />
    </Grid>
  );
};

export default Loading;
