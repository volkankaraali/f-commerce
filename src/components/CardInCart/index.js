// libraries
import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, IconButton, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import numeral from 'numeral';

// icons
import DeleteIcon from '@mui/icons-material/Delete';

// components
import Modal from '../Modal';

// redux
import { addFavorite } from '../../redux/slices/favoritesSlice';
import { decreaseCount, deleteAllItemInCart, increaseCount } from '../../redux/slices/cartSlice';

export default function CardInCart({ item, count }) {

  const dispatch = useDispatch();

  const [deleteAllItemsModal, setDeleteAllItemsModal] = useState(false);
  const handleDeleteAllItemsModalOpen = () => setDeleteAllItemsModal(true);
  const handleDeleteAllItemsModalClose = () => setDeleteAllItemsModal(false);


  // increase and decrease button functions
  const handleIncrease = () => dispatch(increaseCount({ id: item.id }));

  const handleDecrease = () => {
    if (count === 1) handleDeleteAllItemsModalOpen()
    else dispatch(decreaseCount({ id: item.id }))
  }

  const handleDeleteAllItems = () => dispatch(deleteAllItemInCart({ id: item.id }))

  const handleDeleteAndAddFavorites = () => {
    dispatch(addFavorite(item));
    dispatch(deleteAllItemInCart({ id: item.id }));
  }

  return (
    <>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
        <Box
          sx={{
            width: { xs: '100%', sm: 400 },
            height: 200,
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
            src={item.thumbnail}
            alt={item.title}
          />
        </Box>

        <CardContent sx={{ p: 3, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography color="primary" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
          <Typography sx={{ fontSize: 'small' }}>{item.description}</Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 1, alignItems: { sm: 'center' } }}>
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

            <Box>
              <Button onClick={handleIncrease} variant='contained' sx={{ width: 10, height: 30, ml: { sm: 1 }, mr: 1 }}>+</Button>
              <Button onClick={handleDecrease} variant='contained' sx={{ width: 10, height: 30 }}>-</Button>

              <IconButton
                onClick={handleDeleteAllItemsModalOpen}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex', justifyContent: 'end'
            }}
          >
            <Typography sx={{ fontWeight: 'bold' }}>{numeral(item.price).format('0,0[.]00 $')}</Typography>
          </Box>
        </CardContent>
      </Card>

      <Modal open={deleteAllItemsModal} handleClose={handleDeleteAllItemsModalClose} context="Are you sure to delete this item from the cart?" acceptText="Delete and Add to Favorites" rejectionText="Delete" acceptFunc={handleDeleteAndAddFavorites} rejectFunc={handleDeleteAllItems} />
    </>

  )
}
