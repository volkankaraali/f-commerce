// libraries
import React from 'react';
import { Badge, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// palette
import palette from '../../theme/palette';

export default function CartButton() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const { cartItems } = useSelector(state => state.cart);

  const { pathname } = useLocation();
  const isInPage = pathname === '/cart';

  return (
    <Box component={Link} to='/cart' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', borderBottom: isInPage && `2px solid ${palette.dark.primary.main}` }}>
      <Badge badgeContent={cartItems.length || "0"} color="primary">
        {
          isInPage ? <ShoppingCartIcon color='primary' fontSize='large' /> : <ShoppingCartOutlinedIcon color='primary' fontSize='large' />
        }
      </Badge>
      {
        isMobile && <Typography color="primary" sx={{ ml: 2 }}>Cart</Typography>
      }
    </Box>
  )
}
