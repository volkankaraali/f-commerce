import React from 'react';
import { Grid, Skeleton } from '@mui/material';

export default function PlaceholderCard() {
  return (
    <>
      <Grid item xs={3}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
      <Grid item xs={3}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
    </>
  )
}
