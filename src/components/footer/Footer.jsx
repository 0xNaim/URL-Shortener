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
  Typography,
  useTheme
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  footerLight: {
    backgroundColor: '#f8f9fa'
  },
  footerDark: {
    backgroundColor: '#1c1c1c'
  },
  footerLink: {
    color: '#1976d2',
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
    <Box
      className={theme.palette.mode === 'light' ? classes.footerLight : classes.footerDark}
    >
      <Container
        maxWidth="xl"
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
            <Typography variant="body2">
              Made with
            </Typography>
            <Favorite
              color="error"
              sx={{
                fontSize: 14,
                mt: 0.2,
                mx: 0.3
              }}
            />
            <Typography variant="body2">
              by
              <Link
                href="https://www.facebook.com/0xNaim"
                target="_blank"
                rel="noreferrer"
                className={classes.footerLink}
              >
                Naim
              </Link>
            </Typography>
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
    </Box>
  );
};

export default Footer;
