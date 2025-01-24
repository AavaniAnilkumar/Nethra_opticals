import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import Logo from '../../Static/images/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#01796f',
        color: 'white',
        py: 3,
      }}
    >
      {/* Top Section: Logo, Quick Links, Our Branches, and Contact */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'space-between' },
          alignItems: 'flex-start',
          px: 3,
          flexWrap: 'wrap',
          gap: 3, // Increased gap to balance sections better
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        {/* Logo Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 2, sm: 0 } }}> {/* Reduced margin bottom for logo */}
          <Box
            component="img"
            src={Logo}
            alt="Nethra Opticals Logo"
            sx={{
              width: 150,
              height: 'auto',
              mb: 1,
            }}
          />
          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
            <IconButton href="https://www.facebook.com/profile.php?id=61557385501454" target="_blank" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/nethra.pattambi?igsh=em96MjdkNmg3NW8=" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Quick Links */}
        <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, flex: 1, mb: { xs: 3, sm: 0 }, px: { xs: 2, sm: 0 } }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="/about" color="inherit" underline="hover">
              About
            </Link>
          
            <Link href="/photo-gallery" color="inherit" underline="hover">
              Photo Gallery
            </Link>
            <Link href="/careers" color="inherit" underline="hover">
              Careers
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              Contacts
            </Link>
          </Box>
        </Box>

        {/* Our Branches */}
        <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, flex: 1, mb: { xs: 3, sm: 0 } }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
            Our Branches
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography variant="body2">Nilambur</Typography>
            <Typography variant="body2">Perinthalmanna</Typography>
            <Typography variant="body2">Wandoor</Typography>
            <Typography variant="body2">Manarkkad</Typography>
            <Typography variant="body2">Pattambi</Typography>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box sx={{ textAlign: { xs: 'center', sm: 'left' }, flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
            Contact
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
            <PhoneIcon sx={{ mr: 0.5 }} />
           
            <Typography variant="body2">+91 9447 444 328</Typography>
            
             {/* <Link href="tel:+91 9074036981" color="inherit" underline="hover">
      <Typography variant="body2">+91 9074036981</Typography>
    </Link> */}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EmailIcon sx={{ mr: 0.5 }} />
            <Typography variant="body2">nethraeyecareptmb@gmail.com</Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section: Copyright and Policies */}
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Nethra Opticals. All Rights Reserved.
        </Typography>
        {/* <Box sx={{ mt: 1 }}>
          <Link href="/privacy-policy" color="inherit" underline="hover">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="/terms-of-service" color="inherit" underline="hover">
            Terms of Service
          </Link>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Footer;
