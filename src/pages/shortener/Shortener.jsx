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
  Tooltip,
  Typography
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';


const Shortener = () => {
  const [link, setLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(link);

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
    navigator.clipboard.writeText(shortLink);
    setOpen(true);
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Shortener || URL Shortener</title>
      </Helmet>

      <Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: '90vh'
          }}
        >
          <Box
            sx={{
              width: {
                xs: '100%',
                md: '50%'
              }
            }}
          >
            <Typography variant="h6">Short URL Generator</Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                opacity: 0.8
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
              value={link}
              onChange={(e) => setLink(e.target.value.toLowerCase().trim())}
              sx={{
                mb: 2
              }}
            />
            {!isLoading && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={!validUrl}
              onClick={handleClick}
              sx={{
                py: 1,
                mb: 1
              }}
            >
              Generate Short link
            </Button>
            )}

            {isLoading && (
              <Button
                loading="true"
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
            <Tooltip title="Copy to clipboard">
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
            </Tooltip>
            )}
          </Box>
        </Grid>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom', horizontal: 'right'
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
    </>
  );
};

export default Shortener;
