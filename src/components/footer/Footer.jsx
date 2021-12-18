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
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  footer: {
    position: 'fixed',
    top: 'auto',
    bottom: 0
  },
  footerLink: {
    color: '#1c70fe',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xl"
      className={classes.footer}
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
        <Typography
          variant="body2"
          align="left"
        >
          Made with
          {' '}
          <Favorite
            color="error"
            sx={{
              fontSize: 12
            }}
          />
          {' '}
          by
          {' '}
          <a
            href="https://www.facebook.com/0xNaim"
            target="_blank"
            rel="noreferrer"
            className={classes.footerLink}
          >
            Naim
          </a>
        </Typography>
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
