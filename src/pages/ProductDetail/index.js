// libraries
import React, { useEffect, useState } from 'react';
import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Skeleton, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import numeral from 'numeral';

// queries
import { useGetProduct } from '../../Queries/Products';

// redux
import { decreaseCount, increaseCount, deleteAllItemInCart, addCart } from '../../redux/slices/cartSlice';
import { addFavorite, deleteFavorite } from '../../redux/slices/favoritesSlice';

// icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import palette from '../../theme/palette';


export default function ProductDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { cartItems } = useSelector(state => state.cart);
  const { favorites } = useSelector(state => state.favorites);

  const [count, setCount] = useState();
  const [isFavorited, setIsFavorited] = useState();
  const [isAddedCart, setIsAddedCart] = useState(false);

  const { data, isLoading } = useGetProduct(id);

  useEffect(() => {
    checkCount()
    checkFavorite()
  }, [id, cartItems, favorites])

  // checks the item is favorited
  const checkFavorite = () => {
    const item = favorites.find(i => i.id === Number(id));
    item ? setIsFavorited(true) : setIsFavorited(false)
  }

  const handleFav = (e) => {
    isFavorited ? dispatch(deleteFavorite(data?.id)) : dispatch(addFavorite(data))
  }

  // checks count of item in cartlist
  const checkCount = () => {
    const item = cartItems.find(i => i.item.id === Number(id) ? i : false)
    item ? setCount(item.count) : setCount(0)
  }

  // increase and decrease button functions
  const handleIncrease = () => count === 0 ? dispatch(addCart(data)) : dispatch(increaseCount({ id: data?.id }));

  const handleDecrease = () => count === 1 ? dispatch(deleteAllItemInCart({ id: data.id })) : dispatch(decreaseCount({ id: data?.id }))

  // add to cart button functions
  const handleCart = (e) => {
    e.preventDefault();
    setIsAddedCart(true)
    dispatch(addCart(data))
    setTimeout(() => {
      setIsAddedCart(false)
    }, 1000);
  }

  return (
    <Box
      sx={{
        pt: 4
      }}
    >
      <Container>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography color="text.primary" sx={{ ":hover": { textDecoration: 'underline' } }} >Homepage</Typography>
          </Link>

          <Typography color="text.primary">Detail</Typography>
        </Breadcrumbs>
        {
          isLoading
            ? <Skeleton variant="rounded" height={400} />
            :
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }
              }}
            >
              <Box
                sx={{
                  width: { sm: 500, },
                  height: 500
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    objectFit: 'fill',
                    width: '100%',
                    height: '100%',
                  }}
                  loading="lazy"
                  src={data?.thumbnail}
                  alt={data?.title}
                />
              </Box>
              <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color='primary' sx={{ fontSize: '2rem' }}>{data?.title}</Typography>
                  <Typography sx={{ fontSize: '1.2rem' }}>{data?.description}</Typography>

                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 4, alignItems: { sm: 'center' } }}>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ mr: 1 }}>Quantity :</Typography>
                      <TextField
                        disabled
                        sx={{ width: 50 }}
                        value={count}
                        InputProps={{
                          style: {
                            height: 30,
                            width: 50,
                          }
                        }}
                      />
                    </Box>

                    <Box sx={{ mt: { xs: 1, sm: 0 } }}>
                      <Button onClick={handleIncrease} variant='contained' sx={{ width: 10, height: 30, ml: { sm: 1 }, mr: 1 }}>+</Button>
                      <Button onClick={handleDecrease} variant='contained' sx={{ width: 10, height: 30 }}>-</Button>
                    </Box>
                  </Box>
                </Box>



                <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'column', alignItems: 'end', mt: { xs: 2, sm: 0 } }}>
                  <Box>
                    <Typography component="span" sx={{ fontSize: '2rem' }}>Price: </Typography>
                    <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>{numeral(data.price).format('0,0[.]00 $')}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                    {
                      isFavorited
                        ? <Button variant='contained' sx={{ mr: { xs: 0, sm: 1 }, mb: { xs: 1, sm: 0 } }} onClick={handleFav}>
                          <FavoriteIcon sx={{ mr: 1 }} />
                          Favorited
                        </Button>
                        : <Button variant='outlined' sx={{ mr: { xs: 0, sm: 1 }, mb: { xs: 1, sm: 0 } }} onClick={handleFav}>
                          <FavoriteBorderIcon sx={{ mr: 1 }} />
                          Add to Favorites
                        </Button>
                    }

                    {
                      isAddedCart
                        ? <Button variant='contained'>Added to Cart</Button>
                        : <Button variant='outlined' onClick={handleCart}>
                          <AddShoppingCartIcon sx={{ mr: 1 }} />
                          Add to Cart
                        </Button>
                    }

                  </Box>

                </Box>
              </CardContent>
            </Card>
        }

      </Container>
    </Box>
  )
}
