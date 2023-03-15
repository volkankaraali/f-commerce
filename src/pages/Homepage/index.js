// libraries
import React, { useState } from 'react';
import { Box, Container, Grid, Pagination, useMediaQuery, useTheme } from '@mui/material';
import { useProducts } from '../../Queries/Products';

// components
import Card from '../../components/Card';
import PlaceholderCard from '../../components/PlaceholderCard';

export default function Homepage() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(8)
  const { isLoading, data } = useProducts(page, limit);

  // page must missing a number from current page
  const handleCurrentPage = (event, value) => setPage(value - 1)

  return (
    <Box sx={{ pt: 2 }}>
      <Container>
        <Grid container spacing={2}>
          {
            !isLoading && <PlaceholderCard />
          }
          {
            data?.products?.map(item => (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                <Card item={item} />
              </Grid>
            ))
          }
        </Grid>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
        >
          <Pagination color='primary' size={isMobile ? 'small' : 'medium'} count={Math.ceil(data?.total / limit) || 10} page={page + 1} onChange={handleCurrentPage} />
        </Box>

      </Container>

    </Box>
  )
}
