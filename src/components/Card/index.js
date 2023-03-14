// libraries
import React, { useEffect, useState } from 'react';
import { Box, Button, Card as MUICard, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

// icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// redux
import { addFavorite, deleteFavorite } from '../../redux/slices/favoritesSlice';
import { addCart, deleteCart } from '../../redux/slices/cartSlice';

export default function Card({ item }) {

  const dispatch = useDispatch();

  const [isFavorited, setIsFavorited] = useState();
  const [isAddedCart, setIsAddedCart] = useState(false);

  const { favorites } = useSelector(state => state.favorites)
  const { cartItems } = useSelector(state => state.cart)

  useEffect(() => {
    const isInFavorites = favorites.find(i => i.id === item.id)
    setIsFavorited(isInFavorites ? true : false)
  }, [favorites, item])


  const handleFav = (e) => {
    e.preventDefault();
    isFavorited ? dispatch(deleteFavorite(item.id)) : dispatch(addFavorite(item))
  }

  const handleCart = (e) => {
    e.preventDefault();
    setIsAddedCart(true)
    dispatch(addCart(item))
    setTimeout(() => {
      setIsAddedCart(false)
    }, 2000);
  }

  return (
    <MUICard
      sx={{
        height: 400,
        position: 'relative',
      }}
    >
      <CardActionArea component={Link} to='/detail/1'>
        <IconButton
          sx={{
            position: 'absolute',
            right: 8,
            top: 5,
          }}
          onClick={handleFav}
        >
          {
            isFavorited ? <FavoriteIcon color='primary' /> : <FavoriteBorderIcon color='primary' />
          }

        </IconButton>
        <CardMedia
          component="img"
          sx={{
            objectFit: 'fill',
            width: '100%',
            height: 200,
          }}
          loading="lazy"
          src={item.thumbnail}
          alt={item.title}
        />

        <CardContent sx={{ height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography color="primary" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
          <Typography noWrap sx={{ fontSize: 'small' }}>{item.description}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ fontWeight: 'bold' }}>{item.price} $</Typography>
            {
              isAddedCart
                ? <Button variant='contained' sx={{ height: 40 }}>Added to Cart</Button>
                : <IconButton
                  sx={{ borderRadius: 2, height: 40 }}
                  onClick={handleCart}
                >
                  <AddShoppingCartIcon color='primary' />
                  <Typography color='primary'>Add to Cart</Typography>
                </IconButton>
            }
          </Box>
        </CardContent>
      </CardActionArea>
    </MUICard>
  )
}