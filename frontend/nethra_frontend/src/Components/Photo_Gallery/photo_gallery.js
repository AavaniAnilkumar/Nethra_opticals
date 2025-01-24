// import { Typography } from "@mui/material";
// import React from "react";
// import Navbar from "../Navbar/navbar";
// import Footer from "../Footer/footer";
// import Oversized from '../../Static/images/oversized.jpg';
// import Glass1 from '../../Static/images/glass1.jpg';
// import {Box} from "@mui/material";
// import { CardMedia } from '@mui/material';
// import Video from '../../Static/Video/video.mp4';
// import { Card,CardContent } from '@mui/material';
// export default function PhotoGallery() {

//     return(
//         <>
//         <Navbar />
  
//         {/* Carousel Section */}
//         {/* <div id="carouselExample" className="carousel slide">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img
//                 src={Glass1}
//                 className="d-block w-100"
//                 alt="Contact Image"
//                 style={{
//                   width: '100%',
//                   objectFit: 'cover',
//                   height: '400px',
//                   maxHeight: '400px',
//                 }}
//               />
//               <div
//                 className="position-absolute top-50 start-50 translate-middle text-light"
//                 style={{
//                   fontSize: '1.2rem',
//                   fontWeight: 'bold',
//                   padding: '10px',
//                   backgroundColor: 'rgba(0,0,0,0.5)',
//                   borderRadius: '5px',
//                   marginLeft: '-10%',
//                 }}
//               >
//                 <a
//                   href="/"
//                   className="text-light"
//                   style={{
//                     textDecoration: 'none',
//                   }}
//                 >
//                   Home
//                 </a>
//                 <span> →</span>
//                 <span>Photo Gallery</span>
//               </div>
//             </div>
//           </div>
//         </div>
//    */}
//   <Box sx={{ p: 4, textAlign: "center" }}>
//         <Typography variant="h4" gutterBottom>
//           Watch Our Gallery 
//         </Typography>
//         {/* Using CardMedia */}
//         <CardMedia
//           component="video"
//           src={Video}
//           controls
//           sx={{
//             width: "100%",
//             maxWidth: "900px",
//             height: "auto",
//             borderRadius: 2,
//             boxShadow: 3,
//             marginLeft: 40
            
//           }}
//         />
//       </Box>

//       <Box sx={{ p: 4, textAlign: "center" }}>
//         <Typography variant="h4" gutterBottom>
//           Featured Image
//         </Typography>
//         <Card
//           sx={{
//             maxWidth: 600,
//             margin: "0 auto",
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           <CardMedia
//             component="img"
//             height="300"
//             image={Oversized} // Use the imported image here
//             alt="Oversized"
//           />
//           <CardContent>
//             <Typography variant="body1" color="textSecondary">
//               This is an example of an image displayed inside a Material-UI card. You can customize the text and styling.
//             </Typography>
//           </CardContent>
//         </Card>
//       </Box>
  
//         <Footer />
//       </>
//     );
// }



import { Typography, Box, Card, CardMedia, CardContent, Grid } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Oversized from "../../Static/images/oversized.jpg";
import Glass1 from "../../Static/images/glass1.jpg";
import Video from "../../Static/Video/video.mp4";
import N1 from '../../Static/images/n1.jpg';
import N2 from '../../Static/images/n2.jpg';
import N3 from '../../Static/images/n3.jpg';
import N4 from '../../Static/images/n4.jpg';
import N5 from '../../Static/images/n5.jpg';
import N7 from '../../Static/images/n7.jpg';
import N8 from '../../Static/images/n8.jpg';
import N9 from '../../Static/images/n9.jpg';
import N10 from '../../Static/images/n10.jpg';
export default function PhotoGallery() {
  return (
    <>
      <Navbar />

      {/* Video Section */}
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Watch Our Gallery
        </Typography>
        <CardMedia
          component="video"
          src={Video}
          controls
          sx={{
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            borderRadius: 2,
            boxShadow: 3,
            margin: "0 auto", // Centers the video
          }}
        />
      </Box>

      <Box sx={{ p: 5}}>
        <Typography variant="h4" gutterBottom align="center">
          Featured Images
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={N1}
                alt="Oversized"
              />
             
            </Card>
          </Grid>
          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={N2} 
                alt="Glass Image"
              />
              
            </Card>
          </Grid>
          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={N3} 
                alt="Oversized"
              />
             
            </Card>
          </Grid>
        </Grid>
      </Box>


      <Box sx={{ p: 4 }}>
       
        <Grid container spacing={4} justifyContent="center">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={N4}
                alt="Oversized"
              />
             
            </Card>
          </Grid>
          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={N5}
                alt="Glass Image"
              />
              
            </Card>
          </Grid>
          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={N7}
                alt="Oversized"
              />
             
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 4 }}>
       
       <Grid container spacing={4} justifyContent="center">
         {/* Card 1 */}
         <Grid item xs={12} sm={6} md={4}>
           <Card
             sx={{
               borderRadius: 2,
               boxShadow: 3,
             }}
           >
             <CardMedia
               component="img"
               height="500"
               image={N8}
               alt="Oversized"
             />
            
           </Card>
         </Grid>
         {/* Card 2 */}
         <Grid item xs={12} sm={6} md={4}>
           <Card
             sx={{
               borderRadius: 2,
               boxShadow: 3,
             }}
           >
             <CardMedia
               component="img"
               height="500"
               image={N9}
               alt="Glass Image"
             />
             
           </Card>
         </Grid>
         {/* Card 3 */}
         <Grid item xs={12} sm={6} md={4}>
           <Card
             sx={{
               borderRadius: 2,
               boxShadow: 3,
             }}
           >
             <CardMedia
               component="img"
               height="500"
               image={N10}
               alt="Oversized"
             />
            
           </Card>
         </Grid>
       </Grid>
     </Box>

      <Footer />
    </>
  );
}
