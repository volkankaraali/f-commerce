// libraries
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

// components
import Card from '../../components/Card';

export default function Favorites() {

  const { favorites } = useSelector(state => state.favorites);

  return (
    <Box
      sx={{
        pt: 3
      }}
    >
      <Container>
        <Typography color='primary' sx={{ fontSize: '1.5rem', textDecoration: 'underline' }}>Favorites</Typography>
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
