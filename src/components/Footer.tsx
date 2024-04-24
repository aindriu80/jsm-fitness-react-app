import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
        <Typography variant="h5" pb="40px" mt="20px">
          Cruthaithe Aibreán 2024 A.M.G.E.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
