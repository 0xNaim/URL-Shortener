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
        bgcolor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        py: {
          xs: 1,
          sm: 1,
          md: 2
        }
      }}
    >
      <Box sx={{
        flexGrow: 1
      }}
      >
        <Typography
          variant="body2"
          align="left"
          sx={{
            color: '#303030'
          }}
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
        mt: 1
      }}
      >
        <Tooltip title="Facebook">
          <IconButton sx={{
            p: 0
          }}
          >
            <a href="https://www.facebook.com/0xNaim" underline="none" target="_blank" rel="noreferrer">
              <Facebook
                sx={{
                  color: '#6b7280',
                  mr: 1
                }}
              />
            </a>
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton sx={{
            p: 0
          }}
          >
            <a href="https://www.linkedin.com/in/0xnaim/" underline="none" target="_blank" rel="noreferrer">
              <LinkedIn
                sx={{
                  color: '#6b7280',
                  mr: 1
                }}
              />
            </a>
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton sx={{
            p: 0
          }}
          >
            <a href="https://github.com/0xNaim" underline="none" target="_blank" rel="noreferrer">
              <GitHub
                sx={{
                  color: '#6b7280',
                  mr: 1
                }}
              />
            </a>
          </IconButton>
        </Tooltip>
      </Box>
    </Container>
  );
};

export default Footer;
