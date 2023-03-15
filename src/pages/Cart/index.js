// libraries
import React, { useEffect, useState } from 'react';
import { Alert, Box, Breadcrumbs, Button, Card as MUICard, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from "react-redux";
import numeral from 'numeral';

// components
import CardInCart from '../../components/CardInCart';
import { Link } from 'react-router-dom';
import palette from '../../theme/palette';

export default function Cart() {

  const { cartItems } = useSelector(state => state.cart);

  const [subTotalItems, setSubTotalItems] = useState(0)
  const [subTotalPrice, setSubTotalPrice] = useState(0)

  useEffect(() => handleSubTotals(), [cartItems])

  const handleSubTotals = () => {
    let totalItems = 0;
    let totalPrice = 0;

    cartItems.map(i => {
      totalItems += i.count;
      totalPrice += i.item.price * i.count
    })
    setSubTotalItems(totalItems)
    setSubTotalPrice(totalPrice)
  }

  return (
    <Box
      sx={{
        pt: 3
      }}
    >
      <Container>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography color="text.primary" sx={{ ":hover": { textDecoration: 'underline' } }} >Homepage</Typography>
          </Link>

          <Typography color="primary" >Shopping Cart</Typography>
        </Breadcrumbs>

        <Grid container spacing={2}>

          <Grid item xs={12} md={8} >
            {
              cartItems.length === 0 && <Alert severity="info">
                There aren't product in your cart.
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
            <Grid container spacing={1}>
              {
                cartItems?.map(({ item, count }) => (
                  <Grid key={item.id} item xs={12} md={12}>
                    <CardInCart item={item} count={count} />
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} >
            <MUICard sx={{ position: 'sticky', top: 0 }}>
              <CardHeader
                titleTypographyProps={{
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}
                title="Order Summary"
              />
              <CardContent>
                <Box >
                  <Typography component={"span"}>Subtotal ({`${subTotalItems} item${subTotalItems > 1 ? 's' : ''}`}): </Typography>
                  <Typography component={"span"} sx={{ fontWeight: 'bold' }}>{numeral(subTotalPrice).format('0,0[.]00 $')}</Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button size='small' variant='contained'>Proceed to checkout</Button>
                </Box>
              </CardContent>
            </MUICard>
          </Grid>
        </Grid>

      </Container >
    </Box >
  )
}
