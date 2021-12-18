import {
  DarkModeTwoTone,
  GitHub,
  LightModeTwoTone
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import { useColorMode } from '../../contexts/themeContext';


const useStyles = makeStyles(() => ({
  navLink: {
    color: 'inherit',
    textDecoration: 'none'
  },
  navPd: {
    paddingLeft: '0px !important',
    paddingRight: '0px !important'
  }
}));

const Nav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar className={classes.navPd}>
          <Box sx={{
            mr: 'auto'
          }}
          >
            <NavLink to="/" className={classes.navLink}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: {
                    xs: 16,
                    sm: 20,
                    md: 25
                  }
                }}
              >
                SHORTENER
              </Typography>
            </NavLink>
          </Box>

          <Box>
            <NavLink to="/" className={classes.navLink}>
              <Button
                color="inherit"
                sx={{
                  minWidth: {
                    xs: '32px', md: '64px'
                  },
                  p: {
                    xs: '0px 4px', md: '6px 8px'
                  }
                }}
              >
                Home
              </Button>
            </NavLink>
            <NavLink to="/short" className={classes.navLink}>
              <Button
                color="inherit"
                sx={{
                  minWidth: {
                    xs: '32px', md: '64px'
                  },
                  p: {
                    xs: '0px 4px', md: '6px 8px'
                  }
                }}
              >
                Short
              </Button>
            </NavLink>
            <Tooltip title="GitHub repository">
              <IconButton sx={{
                p: 0
              }}
              >
                <Link color="inherit" href="https://github.com/0xNaim/URL-Shortener" underline="none" target="_blank" rel="noreferrer">
                  <GitHub
                    sx={{
                      color: '#fff',
                      mx: {
                        xs: 0.6, md: 1.2
                      }
                    }}
                  />
                </Link>
              </IconButton>
            </Tooltip>
            <Tooltip title={theme.palette.mode === 'light' ? 'Dark' : 'Light'}>
              <IconButton
                onClick={colorMode.toggleColorMode}
                color="inherit"
                sx={{
                  p: 0
                }}
              >
                {theme.palette.mode === 'dark' ? (
                  <LightModeTwoTone
                    sx={{
                      mt: '-5px'
                    }}
                  />
                ) : (
                  <DarkModeTwoTone
                    sx={{
                      mt: '-5px'
                    }}
                  />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
