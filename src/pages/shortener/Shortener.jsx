import { ContentCopy } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const Shortener = () => {
  const [link, setLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const getShortLink = async () => {
    await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((res) => {
        setShortLink(res.data.result.full_short_link);
        setIsLoading(false);
        setLink('');
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    setIsLoading(true);
    getShortLink();
  };

  const handleOpen = () => {
    setOpen(true);
    navigator.clipboard.writeText(shortLink);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '80vh'
        }}
      >
        <Box>
          <Typography variant="h6">Short URL Generator</Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 3,
              color: '#303030'
            }}
          >
            URL shortener built to generate short link that creates better click impression.
          </Typography>
          <TextField
            id="outlined-search"
            label="Paste a long link"
            type="search"
            autoComplete="off"
            fullWidth
            onChange={(e) => setLink(e.target.value)}
            sx={{
              mb: 2
            }}
          />
          {!isLoading && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleClick}
              sx={{
                py: 1,
                mb: 1
              }}
            >
              Short a link
            </Button>
          )}

          {isLoading && (
          <Button
            loading
            variant="contained"
            color="primary"
            disabled
            fullWidth
            sx={{
              py: 1,
              mb: 1
            }}
          >
            <CircularProgress color="inherit" size={20} />
          </Button>
          )}

          { shortLink && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            endIcon={<ContentCopy />}
            sx={{
              py: 1,
              textTransform: 'lowercase'
            }}
            onClick={handleOpen}
          >
            { shortLink }
          </Button>
          )}
        </Box>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top', horizontal: 'right'
        }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: '100%'
          }}
        >
          Link copied!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Shortener;
