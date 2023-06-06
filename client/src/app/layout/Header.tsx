import { AppBar, Toolbar, Typography } from '@mui/material';
import DarkModeSwitch from '../component/DarkModeSwitch';

interface Props {
  darkMode: boolean;
  handleThemeChange(): void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant='h6'>RE-STORE</Typography>
        <DarkModeSwitch checked={darkMode} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
}
