import { ArrowRightAlt } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import URLShortener from '../../assets/images/URL-Shortener.jpg';

const useStyles = makeStyles(() => ({
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
}));

const HeroArea = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      sx={{
        minHeight: '90vh',
        px: {
          xs: 2,
          md: 3
        }
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'inherit'
        }}
      >
        <Box
          sx={{
            width: {
              xs: '85%',
              md: '75%'
            }
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              opacity: 0.9
            }}
          >
            URL Shortener
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            sx={{
              opacity: 0.8
            }}
          >
            URL Shortener is a simple react web application        where users can short their long URL into a short URL.
          </Typography>
          <Link to="/short" className={classes.link}>
            <Button
              variant="contained"
              endIcon={<ArrowRightAlt />}
              sx={{
                mt: 2,
                py: 1.5
              }}
            >
              Getting Started
            </Button>
          </Link>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          display: {
            xs: 'none',
            md: 'flex'
          },
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          component="img"
          sx={{
            minWidth: 300,
            minHeight: 250
          }}
          alt="URL Shortener"
          src={URLShortener}
        />
      </Grid>
    </Grid>
  );
};

export default HeroArea;
