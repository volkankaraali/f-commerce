// libraries
import React, { useState } from 'react';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

// context
import { useSettings } from '../../context/SettingsContext';

// palette
import palette from '../../theme/palette';

// components
import DarkModeButton from '../DarkModeButton';
import CartButton from '../CartButton';
import FavoritesButton from '../FavoritesButton';

// icons
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export default function Header() {

  const { themeMode } = useSettings();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);


  if (isMobile) {
    return (
      <AppBar position='static' sx={{ backgroundImage: 'none', backgroundColor: themeMode === 'dark' ? palette.dark.grey[900] : palette.light.background.default, boxShadow: `1px 6px 7px -10px ${palette.dark.primary.main}` }}>
        <Toolbar sx={{ height: 50, display: 'flex', justifyContent: 'space-between' }}>
          <Box
            component={Link}
            to='/'
            sx={{
              width: 60,
              height: '100%'
            }}
          >
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '100%'
              }}
              src='/assets/images/logo.png'
              alt='f-commerce'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <DarkModeButton />
            <IconButton sx={{ ml: 2 }}>
              <DensityMediumIcon onClick={handleMobileMenu} />
            </IconButton>
          </Box>

        </Toolbar>
        {
          isMobileMenuOpen &&
          <Box sx={{ p: 3, height: 140, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', boxShadow: `1px 6px 7px -10px ${palette.dark.primary.main}`, }}>
            <FavoritesButton />
            <CartButton />
          </Box>
        }
      </AppBar>

    )
  }

  return (
    <Box
      sx={{
        height: 80,
        display: "flex",
        alignItems: "center",
        boxShadow: `1px 6px 7px -10px ${palette.dark.primary.main}`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: '100%'
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: '100%',
          }}
        >
          <Box
            component="img"
            sx={{
              height: '100%'
            }}
            src='/assets/images/logo.png'
            alt='f-commerce'
          />

          <Typography component={Link} to='/' color="primary" sx={{ ml: 2, fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', }}>F-Commerce</Typography>
        </Box>

        <Box
          sx={{
            width: 200,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <DarkModeButton />
          <FavoritesButton />
          <CartButton />
        </Box>
      </Container >
    </Box >
  )
}
