import React from 'react';
import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

export default function NoFound() {
  return (
    <Box>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Box
          component="img"
          sx={{
            width: 500
          }}
          src="assets/images/404page.png"
        />
        <Typography color="primary" component={Link} to="/">Comeback to Homepage</Typography>
      </Container>
    </Box>
  )
}
