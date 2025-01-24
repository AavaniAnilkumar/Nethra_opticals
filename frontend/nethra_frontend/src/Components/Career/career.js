// import React from "react";
// import AboutImage from  '../../Static/images/About1.jpg'; 
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Box, Typography } from "@mui/material";
// import Opticals from '../../Static/images/Opticals.jpeg';
// import Navbar from "../Navbar/navbar";
// import { color } from "framer-motion";
// import Footer from "../Footer/footer";
// import Job1 from '../../Static/images/Job1.jpg';
// import Job2 from '../../Static/images/Job2.jpg';
// export default function CareerPage() {
//   return (
//    <>
//    <Navbar/>



// <Box
//  sx={{
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   px: 2,
//   py: 4
// }}>
//     <Typography variant="h2"
//     sx={{
//       textAlign: 'center',
//       flex: 1,
//       fontSize: {xs: '1.5rem', sm:'2rem',md: '2.5rem',lg:'3rem'},
//       fontWeight: 'bold',
//       color: '#01796f'
//     }}
   
//     >
//     Careers
//     </Typography>
// </Box>



// <Typography variant="h5"
// style={{
//   textAlign: 'center',
//   fontSize: {xs: '1rem', sm:'1.2rem',md: '1.5rem'},
//   lineHeight: {xs:'1.5',sm: '1.75', md:'2'},
//   color: '#333',
//   margin: '20px 0',
//   fontWeight: 'normal'
// }}>
// We are seeking a qualified and experienced <strong>Optometrist and Optical Fitter</strong> to join our dynamic team. 
// The successful candidate will be responsible for providing comprehensive eye care services to our patients, 
// including eye examinations, diagnosis, treatment, and the fitting and dispensing of eyeglasses and contact lenses.


// </Typography>



// <Box
//   sx={{
//     display: 'flex',
//     flexDirection: { xs: 'column', sm: 'row' }, // Column for small screens, row for larger screens
//     // alignItems: 'center',
//     justifyContent: 'space-between',
//     gap: 2, // Adds spacing between elements
//     width: '100%',
//     maxWidth: '1200px',
//     margin: '0 auto', // Center the container horizontally
//     padding: { xs: 2, md: 4 }, // Add padding for better spacing
//   }}
// >
//   {/* Optometrist Section */}
//   <Box
//     sx={{
//       flex: 1,
//       textAlign: { xs: 'center', sm: 'left' }, 
//     }}
//   >
//     <Typography
//       variant="h3"
//       sx={{
//         fontWeight: 'bold',
//         fontStyle: 'italic',
//         fontSize: { xs: '1.5rem', md: '2rem' }, 
//         marginBottom: 2,
//       }}
//     >
//       Optometrist
//     </Typography>
//     <Typography variant="h6"
//     sx={{
//         // fontWeight: 'bold',
//         fontStyle: 'italic',
//         // fontSize: { xs: '1.5rem', md: '2rem' }, 
        
//       }}>Experience: Minimum 1 year.</Typography>
//     <Box
//       component="img"
//       src={Job1} 
//       alt="Optometrist Image"
//       sx={{
//         width: '100%',
//         maxWidth: { xs: '200px', sm: '300px', md: '400px', lg: '500px' }, // Max width for various screen sizes
//         height: 'auto', 
//         margin: "auto",
//         display: 'block', 
//       }}
//     />

//       <Typography variant="h5">
//       Optometrist Job Responsibilities:
//       </Typography>
//       <Typography variant="h6">
//       <ul>
//         <li>
//         Conduct eye exams using optometric equipment and general diagnostic interpretation.
//         </li>
//         <li>
//         Prescribe, fit, and adjust eyeglasses, contact lenses, and other vision aids.
//         </li>
//         <li>
//         Recommend appropriate patient follow-up and care options.
//         </li>
//         <li>
//         Answer questions and provide advice to patients regarding vision and optical issues.
//         </li>
//         <li>
//         Deliver outstanding customer service through all patient interactions.
//         </li>
//       </ul>
//       </Typography>
//   </Box>


//   {/* Optical Fitter Section */}
//   <Box
//     sx={{
//       flex: 1, // Makes both sections equal width
//       textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
//     }}
//   >
//     <Typography
//       variant="h3"
//       sx={{
//         fontWeight: 'bold',
//         fontStyle: 'italic',
//         fontSize: { xs: '1.5rem', md: '2rem' }, // Responsive font size
//         marginBottom: 2,
//       }}
//     >
//       Optical Fitter
//     </Typography>
//     <Typography variant="h6"
//     sx={{
//         // fontWeight: 'bold',
//         fontStyle: 'italic',
//         // fontSize: { xs: '1.5rem', md: '2rem' }, 
        
//       }}>Experience: Minimum 1 year.</Typography>

//     <Box
//       component="img"
//       src={Job2} // Optical Fitter image source
//       alt="Optical Fitter Image"
//       sx={{
//         width: '100%',
//         maxWidth: { xs: '200px', sm: '300px', md: '400px', lg: '500px' }, // Max width for various screen sizes
//         height: 'auto', // Maintain aspect ratio
//         margin: "auto",
//         display: 'block', // Ensure image centers horizontally
//       }}
//     />

// <Typography variant="h5">
//       Optical Fitter Job Responsibilities:
//       </Typography>
//       <Typography variant="h6">
//       <ul>
//         <li>
//         Assemble and fit eyeglasses according to prescriptions provided by optometrists or ophthalmologists.       
//         </li>
//         <li>
//         Measure customers' facial features to ensure accurate alignment and comfort of eyeglasses.

//         </li>
//         <li>
//         Repair and adjust frames for a proper fit, ensuring customer satisfaction.
//         </li>
//         <li>
//         Answer questions and provide advice to patients regarding vision and optical issues.
//         </li>
//         <li>
//         Maintain inventory of lenses, frames, and optical tools, ordering supplies as needed.
//         </li>
//       </ul>
//       </Typography>
//   </Box>
// </Box>








// <Box sx={{marginTop: 3}}>
//   <Footer/>
// </Box>



// </>
//   );
// }



import React from "react";
import AboutImage from '../../Static/images/About1.jpg'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Job1 from '../../Static/images/Job1.jpg';
import Job2 from '../../Static/images/Job2.jpg';

export default function CareerPage() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          py: 4,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            flex: 1,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
            fontWeight: 'bold',
            color: '#01796f',
          }}
        >
          Careers
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
          lineHeight: { xs: '1.5', sm: '1.75', md: '2' },
          color: '#333',
          margin: '20px 0',
          fontWeight: 'normal',
          px: { xs: 2, md: 4 },
        }}
      >
        We are seeking a qualified and experienced <strong>Optometrist and Optical Fitter</strong> to join our dynamic team. 
        The successful candidate will be responsible for providing comprehensive eye care services to our patients, 
        including eye examinations, diagnosis, treatment, and the fitting and dispensing of eyeglasses and contact lenses.
      </Typography>

      {/* Job Details Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          gap: 3,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: { xs: 2, md: 4 },
        }}
      >
        {/* Optometrist Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontSize: { xs: '1.5rem', md: '2rem' },
              marginBottom: 2,
            }}
          >
            Optometrist
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontStyle: 'italic',
              marginBottom: 2,
            }}
          >
            Experience: Minimum 1 year.
          </Typography>
          <Box
            component="img"
            src={Job1}
            alt="Optometrist Image"
            sx={{
              width: '100%',
              maxWidth: { xs: '200px', sm: '300px', md: '400px', lg: '500px' },
              height: 'auto',
              margin: 'auto',
              display: 'block',
            }}
          />
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Optometrist Job Responsibilities:
          </Typography>
          <Typography variant="h6">
            <ul>
              <li>Conduct eye exams using optometric equipment and diagnostic interpretation.</li>
              <li>Prescribe, fit, and adjust eyeglasses, contact lenses, and other vision aids.</li>
              <li>Recommend appropriate patient follow-up and care options.</li>
              <li>Answer questions and provide advice to patients regarding vision and optical issues.</li>
              <li>Deliver outstanding customer service through all patient interactions.</li>
            </ul>
          </Typography>
        </Box>

        {/* Optical Fitter Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontSize: { xs: '1.5rem', md: '2rem' },
              marginBottom: 2,
            }}
          >
            Optical Fitter
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontStyle: 'italic',
              marginBottom: 2,
            }}
          >
            Experience: Minimum 1 year.
          </Typography>
          <Box
            component="img"
            src={Job2}
            alt="Optical Fitter Image"
            sx={{
              width: '100%',
              maxWidth: { xs: '200px', sm: '300px', md: '400px', lg: '500px' },
              height: 'auto',
              margin: 'auto',
              display: 'block',
            }}
          />
          <Typography variant="h5" sx={{ marginTop: 2 }}>
            Optical Fitter Job Responsibilities:
          </Typography>
          <Typography variant="h6">
            <ul>
              <li>Assemble and fit eyeglasses according to prescriptions provided by optometrists or ophthalmologists.</li>
              <li>Measure customers' facial features to ensure accurate alignment and comfort of eyeglasses.</li>
              <li>Repair and adjust frames for a proper fit, ensuring customer satisfaction.</li>
              <li>Answer questions and provide advice to patients regarding vision and optical issues.</li>
              <li>Maintain inventory of lenses, frames, and optical tools, ordering supplies as needed.</li>
            </ul>
          </Typography>
        </Box>
      </Box>


      <Box
  sx={{
    textAlign: 'center',
    mt: 4, // Margin top for spacing
    px: 2, // Padding for better alignment
  }}
>
  <Typography
    variant="h5"
    sx={{
      fontWeight: 'bold',
      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
      color: '#01796f', // Accent color
      mb: 2, // Margin bottom for spacing
    }}
  >
    Interested in this position? 
  </Typography>
  <Typography
    variant="h6"
    sx={{
      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
      lineHeight: 1.5,
      color: '#555', // Neutral color
    }}
  >
    Send your CV to <strong>+91 9447 444 328</strong>. We look forward to hearing from you!
  </Typography>
</Box>


      {/* Footer */}
      <Box sx={{ marginTop: 3 }}>
        <Footer />
      </Box>
    </>
  );
}
