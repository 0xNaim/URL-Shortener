import {
  DarkModeOutlined,
  GitHub
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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
            <Tooltip title="Github">
              <IconButton sx={{
                p: 0
              }}
              >
                <a href="https://github.com/0xNaim" underline="none" target="_blank" rel="noreferrer">
                  <GitHub
                    sx={{
                      color: 'white',
                      mx: {
                        xs: 0.6, md: 1.2
                      }
                    }}
                  />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="Night">
              <IconButton sx={{
                p: 0
              }}
              >
                <DarkModeOutlined sx={{
                  color: 'white',
                  fontSize: 27,
                  marginTop: -0.7
                }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
