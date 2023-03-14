// libraries
import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

// context
import { useSettings } from '../../context/SettingsContext';

export default function DarkModeButton() {

  const { themeMode, changeThemeMode } = useSettings();

  return (
    <>
      {
        themeMode === 'light'
          ? <DarkModeIcon color='primary' fontSize='large' sx={{ cursor: 'pointer' }} onClick={() => changeThemeMode('dark')} />
          : <LightModeOutlinedIcon color='primary' fontSize='large' sx={{ cursor: 'pointer' }} onClick={() => changeThemeMode('light')} />
      }

    </>
  )
}
