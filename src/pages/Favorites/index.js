// libraries
import { Alert, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// components
import Card from '../../components/Card';
import palette from '../../theme/palette';

export default function Favorites() {

  const { favorites } = useSelector(state => state.favorites);

  return (
    <Box
      sx={{
        pt: 3
      }}
    >
      <Container>
        <Typography color='primary' sx={{ fontSize: '1.7rem', textDecoration: 'underline' }}>Favorites</Typography>
        {
          favorites.length === 0 && <Alert severity="info">
            There aren't favorite products.
            <Typography
              to='/'
              component={Link}
              sx={{
                color: palette.dark.primary.light,
                fontSize: 'small',
                textDecoration: 'none',
                ":hover": {
                  textDecoration: 'underline'
                }
              }}>Click here to find product!</Typography>
          </Alert>
        }
        <Grid container spacing={2}>
          {
            favorites.map(item => (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <Card item={item} />
              </Grid>
            ))
          }

        </Grid>
      </Container>
    </Box>
  )
}
