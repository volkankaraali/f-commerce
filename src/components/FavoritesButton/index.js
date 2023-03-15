// libraries
import React from 'react';
import { Badge, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// theme
import palette from '../../theme/palette';

export default function FavoritesButton() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const { favorites } = useSelector(state => state.favorites);

  const { pathname } = useLocation();
  const isInPage = pathname === '/favorites';

  return (
    <Box component={Link} to='/favorites' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', borderBottom: isInPage && `2px solid ${palette.dark.primary.main}` }}>
      <Badge badgeContent={favorites.length || "0"} color="primary">
        {isInPage ? <FavoriteIcon fontSize='large' color="primary" /> : <FavoriteBorderIcon fontSize='large' color="primary" />}
      </Badge>
      {
        isMobile && <Typography color="primary" sx={{ ml: 2 }}>Favorites</Typography>
      }
    </Box>
  )
}
