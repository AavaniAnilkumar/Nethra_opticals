

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
// import { Button } from '@mui/material';

// import logo from '../../Static/images/logo.png';
// import CallIcon from '@mui/icons-material/Call';

// export default function Dashboard() {
//   return (
//     <>
    
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           padding: 2,
//           backgroundColor: '#f5f5f5',
//           borderBottom: '1px solid #ccc', 
//         }}
//       >
//         <Box
//           component="img"
//           src={logo}
//           alt="Logo"
//           sx={{
//             height: 80, 
//             width: 80,  
//             marginRight: 2, 
//           }}
//         />
//         <Typography
//           variant="h4"
//           component="div"
//           sx={{
//             color: '#01796f', 
//             fontWeight: 'bold', 
//             fontSize: '2rem', 
//           }}
//         >
//           Nethra Eye Care
//         </Typography>
//         <CallIcon 
//         sx={{
//           marginLeft: 50,
//           color: '#171614',

//         }} 
//         />
//         <Typography
//           sx={{
//             fontFamily:''
//           }}
//         >
//           +91 9447 444 328
//         </Typography>
//       </Box>

//       {/* Navigation AppBar */}
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ backgroundColor: '#01796f' }}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//             ></Menu>
            // <Button variant="text" color="inherit">
            //   Home
            // </Button>
            // <Button variant="text" color="inherit" sx={{marginLeft:4}}>
            //   About
            // </Button>
            // <Button variant="text" color="inherit"  sx={{marginLeft:4}}>
            //   Products
            // </Button>
            // <Button variant="text" color="inherit"  sx={{marginLeft:4}}>
            //   Photo Gallery
            // </Button>
            // <Button variant="text" color="inherit"  sx={{marginLeft:4}}>
            //   Contact
            // </Button>
//           </Toolbar>

//         </AppBar>
//       </Box>
//     </>
//   );
// }

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
// import { Button } from '@mui/material';

// import logo from '../../Static/images/logo.png';

// export default function Dashboard() {
//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ backgroundColor: '#01796f' }}>
//           <Toolbar>
           
//             <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//               }}
              
//             >
//                <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//               <Box
//                 component="img"
//                 src={logo}
//                 alt="Logo"
//                 sx={{
//                   height: 80, 
//                   width: 80,  
//                   marginRight: 2, 
//                 }}
//               />
//               <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{
//                   color: 'white', 
//                   fontWeight: 'bold', 
//                   fontSize: '1.5rem', 
//                 }}
//               >
//                 Nethra Eye Care
//               </Typography>
//             </Box>


//             <Box sx={{ flexGrow: 1,marginRight:40 }} />
           
//             <Button variant="text" color="inherit">
//               Home
//             </Button>
//             <Button variant="text" color="inherit">
//               About
//             </Button>
//             <Button variant="text" color="inherit" >
//               Products
//             </Button>
//             <Button variant="text" color="inherit" >
//               Photo Gallery
//             </Button>
//             <Button variant="text" color="inherit" >
//               Contact
//             </Button>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </>
//   );
// }



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Button, useMediaQuery } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// import logo from '../../Static/images/logo.png';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Navbar() {
//   const theme = useTheme();

//   // Check screen size for responsiveness
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile devices
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Tablets

//   const navigate = useNavigate();

//   // State for managing dropdown menu
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const openMenu = Boolean(anchorEl);

//   // Handle opening and closing of the mobile menu
//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       {/* Top Bar with Contact Info */}
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           px: 2,
//           py: 1,
//           backgroundColor: '#f9f9f9',
//           flexDirection: isMobile ? 'column' : 'row',
//         }}
//       >
//         {/* Contact Info */}
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             flexWrap: isMobile ? 'wrap' : 'nowrap',
//           }}
//         >
//           <CallIcon sx={{ marginRight: 1, color: '#BF0000' }} />
//           <Typography
//             sx={{
//               fontSize: isMobile ? '0.9rem' : '1rem',
//               fontWeight: 'bold',
//               color: 'black',
//               marginRight: isMobile ? 0 : 5,
//             }}
//           >
//             +91 9447 444 328
//           </Typography>

//           <Box sx={{ display: 'flex', alignItems: 'center', marginTop: isMobile ? 1 : 0 }}>
//             <EmailIcon sx={{ marginRight: 1, color: '#BF0000' }} />
//             <Typography sx={{ fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 'bold' }}>
//               nethraeyecareptmb@gmail.com
//             </Typography>
//           </Box>
//         </Box>
//       </Box>

//       {/* Navbar */}
//       <AppBar position="static" sx={{ backgroundColor: '#01796f' }}>
//         <Toolbar>
//           {/* Logo and Title */}
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               flexGrow: isMobile ? 1 : 0,
//               justifyContent: isMobile ? 'center' : 'flex-start',
//             }}
//           >
//             {/* Menu Icon for Mobile */}
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2, display: isMobile ? 'block' : 'none' }}
//               onClick={handleMenuClick}
//             >
//               <MenuIcon />
//             </IconButton>

//             {/* Logo */}
//             <Box
//               component="img"
//               src={logo}
//               alt="Logo"
//               sx={{
//                 height: isMobile ? 40 : 70,
//                 width: isMobile ? 40 : 70,
//                 marginRight: 2,
//               }}
//             />

//             {/* Title */}
//             <Typography
//               variant={isMobile ? 'h6' : 'h5'}
//               component="div"
//               sx={{
//                 color: 'white',
//                 fontWeight: 'bold',
//                 textAlign: isMobile ? 'center' : 'left',
//               }}
//             >
//               Nethra Eye Care
//             </Typography>
//           </Box>

//           {/* Navigation Buttons for Desktop/Tablet */}
//           {!isMobile && (
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'flex-end',
//                 flexGrow: 1,
//                 marginRight: isTablet ? 2 : 5,
//               }}
//             >
//               <Button color="inherit" onClick={() => navigate('/')}>
//                 Home
//               </Button>
//               <Button color="inherit" onClick={() => navigate('/about')} >About</Button>
//               {/* <Button color="inherit">Products</Button> */}
//               <Button color="inherit" onClick={()=> navigate('/photo-gallery')}>Photo Gallery</Button>
//               <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
//               <MenuItem onClick={() => { handleMenuClose(); navigate('/contact  '); }}>
//               Appointment
//             </MenuItem>
//               {/* <div class="btns-box">
//                             <a class="btn-one style2" href="https://motheropticals.com/contact">
//                                 <span class="txt">QUICK ENQUIRY<i class="fa fa-angle-double-right round" aria-hidden="true"></i></span>
//                             </a>
//                         </div> */}
//             </Box>
//           )}

//           {/* Mobile Dropdown Menu */}
//           <Menu
//             anchorEl={anchorEl}
//             open={openMenu}
//             onClose={handleMenuClose}
//             PaperProps={{
//               sx: {
//                 width: '200px',
//                 maxHeight: '300px',
//               },
//             }}
//           >
//             <MenuItem onClick={() => { handleMenuClose(); navigate('/'); }}>Home</MenuItem>
//             <MenuItem onClick={handleMenuClose}>About</MenuItem>
//             {/* <MenuItem onClick={handleMenuClose}>Products</MenuItem> */}
//             <MenuItem onClick={handleMenuClose}>Photo Gallery</MenuItem>
//             <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
//             <MenuItem onClick={() => { handleMenuClose(); navigate('/contact'); }}>
//               Appointment
//             </MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import logo from '../../Static/images/logo.png';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const theme = useTheme();

  // Check screen size for responsiveness
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile devices
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Tablets

  const navigate = useNavigate();

  // State for managing dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  // Handle opening and closing of the mobile menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Top Bar with Contact Info */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1,
          backgroundColor: '#f9f9f9',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {/* Contact Info */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
          }}
        >
          <CallIcon sx={{ marginRight: 1, color: '#BF0000' }} />
          <Typography
            sx={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: 'bold',
              color: 'black',
              marginRight: isMobile ? 0 : 5,
            }}
          >
            +91 9447 444 328
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: isMobile ? 1 : 0 }}>
            <EmailIcon sx={{ marginRight: 1, color: '#BF0000' }} />
            <Typography sx={{ fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 'bold' }}>
              nethraeyecareptmb@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#01796f' }}>
        <Toolbar>
          {/* Logo and Title */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: isMobile ? 1 : 0,
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            {/* Menu Icon for Mobile */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: isMobile ? 'block' : 'none' }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: isMobile ? 40 : 70,
                width: isMobile ? 40 : 70,
                marginRight: 2,
              }}
            />

            {/* Title */}
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              component="div"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              Nethra Eye Care
            </Typography>
          </Box>

          {/* Navigation Buttons for Desktop/Tablet */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                flexGrow: 1,
                marginRight: isTablet ? 2 : 5,
              }}
            >
              <Button color="inherit" onClick={() => navigate('/')}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
              <Button color="inherit" onClick={() => navigate('/photo-gallery')}>Photo Gallery</Button>
              <Button color='inherit' onClick={() => navigate('/careers')}>Career</Button>
              <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>

              {/* Appointment Button */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#BF0000',
                  color: 'white',
                  fontWeight: 'bold',
                  paddingX: 3,
                  paddingY: 1,
                  marginLeft: 2,
                  '&:hover': {
                    backgroundColor: '#FF4500',
                  },
                }}
                onClick={() => navigate('/contact')}
              >
                Appointment
              </Button>
            </Box>
          )}

          {/* Mobile Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                width: '200px',
                maxHeight: '300px',
              },
            }}
          >
            <MenuItem onClick={() => { handleMenuClose(); navigate('/'); }}>Home</MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/about'); }}>About</MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/photo-gallery'); }}>Photo Gallery</MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/career'); }}>Career</MenuItem>

            <MenuItem onClick={() => { handleMenuClose(); navigate('/contact'); }}>Contact</MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/contact'); }}>
              Appointment
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
