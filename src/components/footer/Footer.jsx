import {
  Facebook,
  Favorite,
  GitHub,
  LinkedIn
} from '@mui/icons-material';
import {
  Box,
  Container,
  IconButton,
  Link,
  Tooltip,
  useTheme
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  footerLight: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    backgroundColor: '#f8f9fa'
  },
  footerDark: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    backgroundColor: '#1c1c1c'
  },
  footerLink: {
    color: '#1c70fe',
    marginLeft: '3px',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      className={theme.palette.mode === 'light' ? classes.footerLight : classes.footerDark}
      sx={{
        display: 'flex',
        alignItems: 'center',
        opacity: 0.85
      }}
    >
      <Box sx={{
        flexGrow: 1
      }}
      >
        <Box
          component="span"
          align="left"
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Made with
          {' '}
          <Favorite
            color="error"
            sx={{
              fontSize: 14,
              mt: 0.2,
              mx: 0.3
            }}
          />
          {' '}
          by
          <Link
            href="https://www.facebook.com/0xNaim"
            target="_blank"
            rel="noreferrer"
            className={classes.footerLink}
          >
            Naim
          </Link>
        </Box>
      </Box>

      <Box sx={{
        minWidth: '80px',
        mt: 1,
        display: 'flex',
        justifyContent: 'space-between'
      }}
      >
        <Tooltip title="Facebook">
          <IconButton sx={{
            p: 0
          }}
          >
            <Link color="inherit" href="https://www.facebook.com/0xNaim" underline="none" target="_blank" rel="noreferrer">
              <Facebook />
            </Link>
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton sx={{
            p: 0
          }}
          >
            <Link color="inherit" href="https://www.linkedin.com/in/0xnaim/" underline="none" target="_blank" rel="noreferrer">
              <LinkedIn />
            </Link>
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton sx={{
            p: 0
          }}
          >
            <Link color="inherit" href="https://github.com/0xNaim" underline="none" target="_blank" rel="noreferrer">
              <GitHub />
            </Link>
          </IconButton>
        </Tooltip>
      </Box>
    </Container>
  );
};

export default Footer;
