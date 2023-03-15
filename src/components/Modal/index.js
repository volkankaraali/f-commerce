import React from 'react';
import { Box, Button, Card, CardContent, CardHeader, IconButton, Modal as MUIModal, Typography } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';

export default function Modal({ open, handleClose, context, acceptText, rejectionText, acceptFunc, rejectFunc }) {


  return (
    <MUIModal
      open={open}
      onClose={handleClose}
    >
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 300, sm: 400 },
          boxShadow: 24,
          p: 1,
        }}
      >
        <CardHeader
          title='Upps! Something Will Happen;'
          titleTypographyProps={{ fontSize: 'medium', fontWeight: 'bold' }}
          sx={{ p: 1 }}
          action={
            <IconButton aria-label="settings" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent sx={{ p: 1 }}>
          <Typography>{context}</Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant='contained' sx={{ mr: 1, mb: { xs: 1, sm: 0 } }} onClick={acceptFunc}>{acceptText}</Button>
            <Button variant='outlined' onClick={rejectFunc}>{rejectionText}</Button>
          </Box>
        </CardContent>
      </Card>
    </MUIModal >
  )
}
