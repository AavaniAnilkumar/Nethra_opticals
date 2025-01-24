// import { Box, Typography } from "@mui/material";
// import Navbar from "../Navbar/navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Image1 from '../../Static/images/image1.jpg';
// import Image2 from '../../Static/images/image2.jpg';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Image3 from '../../Static/images/images3.jpg';
// import Opticals from '../../Static/images/Opticals.jpeg';

// export default function Dashboard() {
//   return (
//     <>
//       <div id="carouselExample" className="carousel slide">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={Image1}
//               className="d-block mx-auto"
//               alt="..."
//               style={{ width: "100%", height: "auto", maxHeight: "500px" }}
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={Image2}
//               className="d-block w-100"
//               alt="..."
//               style={{ width: "100%", height: "auto", maxHeight: "390px" }}
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               src={Image3}
//               className="d-block w-100"
//               alt="..."
//               style={{ width: "100%", height: "auto", maxHeight: "390px" }}
//             />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExample"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>

//        <Box
//            component="img"
//             src={Opticals}
//             alt=""
//             sx={{
//                   height:  500, 
//                   width: 500,
//                   marginLeft: 20,
//                   marginTop: 10,
//                 }}
//         >

        
//         </Box>
//         <Typography> About Us</Typography>
//     </>
//   );
// }


import { Box, Button, Typography } from "@mui/material";
import Navbar from "../Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../Static/images/op1.jpeg";
import Image2 from "../../Static/images/image2.jpg";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Image3 from "../../Static/images/images3.jpg";
import Opticals from "../../Static/images/Opticals.jpeg";
import {motion} from "framer-motion";
import Cataract from '../../Static/images/catract.jpg';
import Pediatric from '../../Static/images/Pediatric.jpg';
import Rayban from '../../Static/images/ray-ban.svg';
import Fastrack from '../../Static/images/Fastrack.png';
import Fila from '../../Static/images/fila.png';
import Carrera  from '../../Static/images/carrera.png';
import Police from '../../Static/images/police.png';
import DavidJhones from '../../Static/images/dj.png';
import Doctor from '../../Static/images/Doctor.jpg';
import Retina from '../../Static/images/retina.jpg';
import Contact_Lense from '../../Static/images/contact_lense.jpg';
import Footer from "../Footer/footer";
export default function Dashboard() {
  return (
    <>
      <Navbar />

      {/* The coursel portion  */}


      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Image1}
              className="d-block mx-auto"
              alt="..."
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "1000px",
              }}
            />
          </div>
          {/* <div className="carousel-item">
            <img
              src={Image2}
              className="d-block w-100"
              alt="..."
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "390px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Image3}
              className="d-block w-100"
              alt="..."
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "390px",
              }}
            />
          </div> */}
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

          {/* The About Us Section */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          px: 3,
          marginTop:10,
        }}
      >
        {/* Left Side: Image */}
        <Box
          component="img"
          src={Opticals}
          alt=""
          sx={{
            height: { xs: 150, sm: 200, md: 300, lg: 400 }, 
            width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" }, 
            margin: { xs: "auto", md: "0" },
          }}
        />

        {/* Right Side: About Us */}
        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 3, md: 0 }, 
            ml: { md: 5 }, 
            px: { xs: 2, sm: 3 }, 
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem",color: 'Green', fontWeight:'bolder' }, // Scaled-down font size
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
              mt: 1,
            }}
          >
           Located in the heart of Pattambi, Nethra Eye Care is a trusted name in providing top-notch eye care services. With over 25 years of experience in the field, we have built a reputation for delivering high-quality eye care solutions to our valued patients.

As part of the renowned <b>Popular Group</b>, which includes a leading eye care hospital, Nethra Eye Care continues to uphold the legacy of excellence in eye care. Our experienced team of ophthalmologists and optometrists are dedicated to ensuring that your vision is in the best possible hands. We offer a wide range of services, including eye check-ups, treatments, and surgeries, all with the latest technology and personalized care.
          </Typography>
          
          <Typography sx={{
            textAlign: "center",
            mt: { xs: 3, md: 0 }, 
            ml: { md: 5 },
            px: { xs: 2, sm: 3 }, 

          }}>Find the Perfect Spectacle Lenses for Your Eyes - We’re Here to Help!</Typography>
          <Typography> <b>Call us:</b> +91 9447 444 328</Typography>
        </Box>
      </Box>



            {/* The Serivces Section */}


        <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          px: 3,
          marginTop:10,
        }}
      >
    

       
        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 3, md: 0 },
            ml: { md: 5 }, 
            px: { xs: 2, sm: 3 }, 
          }}
        >
     <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              color: "green",
              fontWeight: "bolder",
            }}
          >
           Our Services
          </Typography>
        </motion.div>
        
          
        </Box>
       
      </Box>

      <Box
  sx={{
    display: "flex",
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: 3, 
    mt: 3, 
  }}
>
  {/* Image 1 */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column", // Align image and text vertically
      alignItems: "center", // Center align image and text
      gap: 1, // Spacing between image and text
    }}
  >
    <Box
      component="img"
      src={Cataract}
      alt="Cataract Diagnosis"
      sx={{
        height: { xs: 100, sm: 150, md: 200 }, 
        width: { xs: 100, sm: 150, md: 200 },
        borderRadius: "50%", 
        border: "2px solid #ddd", 
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
      }}
    />
    <Typography sx={{ textAlign: "center" }}>Cataract Diagnosis Section</Typography>
  </Box>

  {/* Image 2 */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column", 
      alignItems: "center", 
      gap: 1, 
    }}
  >
    <Box
      component="img"
      src={Pediatric}
      alt="Pediatric Ophthalmology"
      sx={{
        height: { xs: 100, sm: 150, md: 200 }, 
        width: { xs: 100, sm: 150, md: 200 }, 
        borderRadius: "50%", 
        border: "2px solid #ddd", 
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
      }}
    />
    <Typography sx={{ textAlign: "center" }}>
      Department of Pediatric Ophthalmology
    </Typography>


      


  </Box>

  <Box
    sx={{
      display: "flex",
      flexDirection: "column", 
      alignItems: "center", 
      gap: 1, 
    }}
  >
    <Box
      component="img"
      src={Retina}
      alt="Pediatric Ophthalmology"
      sx={{
        height: { xs: 100, sm: 150, md: 200 }, 
        width: { xs: 100, sm: 150, md: 200 }, 
        borderRadius: "50%", 
        border: "2px solid #ddd", 
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
      }}
    />
    <Typography sx={{ textAlign: "center" }}>
      Retina Department
    </Typography>
  </Box>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column", 
      alignItems: "center", 
      gap: 1, 
    }}
  >
    <Box
      component="img"
      src={Contact_Lense}
      alt="Pediatric Ophthalmology"
      sx={{
        height: { xs: 100, sm: 150, md: 200 }, 
        width: { xs: 100, sm: 150, md: 200 }, 
        borderRadius: "50%", 
        border: "2px solid #ddd", 
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
      }}
    />
    <Typography sx={{ textAlign: "center" }}>
      Contact Lenses Section
    </Typography>
  </Box>



</Box>



{/* <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop:5
    }}>
      <Button 
      variant="contained" 
      sx={{
        height: {xs:40,sm:50},
        maxWidth: {xs:100,sm: 150},
        textTransform: "none",
        fontSize: {xs: "0.8rem",sm: "1rem"}
        }}>See More</Button>
    </Box> */}




        {/* Our Brand Section */}

    <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" }, 
      alignItems: "center",
      justifyContent: "center",
      mt: 3,
      px: 3,
      marginTop:10,
    }}>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        gap: 1, 
      }}> 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              color: "green",
              fontWeight: "bolder",
            }}
          >
            Our Brands
          </Typography>
        </motion.div> 

        <Box
  sx={{
    display: "flex",
    flexWrap: "wrap", 
    gap: 2,
    py: 2,
    justifyContent: { xs: "center", sm: "start" }, 
  }}
>
  {[Rayban, Fastrack, Fila, Carrera, Police, DavidJhones].map((brand, index) => (
    <Box 
      key={index} 
      sx={{
        flex: { xs: "1 1 calc(25% - 8px)", sm: "1 1 auto" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={brand}
        alt={`Brand ${index + 1}`}
        sx={{
          width: { xs: 70, sm: 90, md: 120,lg:150 },
          height: { xs: 70, sm: 90, md: 120,lg:150 },
          objectFit: "contain",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
      </Box>
    ))}
    </Box>
  </Box>
</Box>

<hr/>

<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on larger screens
    alignItems: { xs: "center", md: "flex-start" },
    justifyContent: "space-between",
    gap: 2,
    padding: 2,
  }}
>
  {/* Left Side: Image */}
  <Box
    component="img"
    src={Doctor}
    alt="Doctor's Image"
    sx={{
      width: { xs: "80%", md: "30%" }, 
      maxWidth: "300px",
      borderRadius: "8px",
      objectFit: "cover",
      alignSelf: { xs: "center", md: "flex-start" },
    }}
  />

  {/* Center: Doctor Details */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 1,
      textAlign: { xs: "center", md: "left" },
      flex: 1, 
    }}
  >
    <Typography
      sx={{
        fontWeight: "bolder",
        fontSize: { xs: 30, md: 50 }, 
      }}
    >
      Dr. UnniKrishnan V.V
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: 16, md: 20 },
      }}
    >
      Bsc, MBBS, DO
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: 16, md: 20 },
      }}
    >
      Consultant Ophthalmologist
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: 16, md: 20 },
      }}
    >
      Reg No: 18415
    </Typography>

    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: { xs: 16, md: 20 },
        marginTop: { xs: 2, md: 5 },
      }}
    >
      Booking No: +91 94474 44328 (Monday to Saturday)
    </Typography>
    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: { xs: 16, md: 20 },
      }}
    >
      Timing: 10 AM to 1 PM
    </Typography>
  </Box>

  {/* Right Side: Branch Details Card */}
  <Box
    sx={{
      flex: 1, // Allow card to take equal space
      padding: 3,
      backgroundColor: "#01796f", 
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(39, 118, 37, 0.1)", 
      textAlign: "left",
      color:'white'
    }}
  >
    <Typography
      sx={{
        fontWeight: "bolder",
        fontSize: { xs: 18, md: 22 },
        marginBottom: 2,
        color:'black'
      }}
    >
      Our Branches
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
        marginBottom: 1,
      }}
    >
      <strong>Brother's Opticals:</strong> Perinthalmanna,Manarakkad,Nilambur
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
        marginBottom: 1,
      }}
    >
      Contact: +91 9447 924 764
    </Typography>
    {/* <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
        marginBottom: 2,
      }}
    >
      Timing: 9 AM - 5 PM
    </Typography> */}
    <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
      }}
    >
      <strong>Popular Opticals:</strong> Manarakkad,Nilambur
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
        marginBottom: 1,
      }}
    >
     
    </Typography>
    {/* <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
      }}
    >
      Timing: 10 AM - 6 PM
    </Typography> */}


<Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
      }}
    >
      <strong>Eye Point:</strong> Manarakkad
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
        marginBottom: 1,
      }}
    >
      Contact: +91 8921 118 933
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
      }}
    >
      <strong>Nethra Eye Hospital :</strong> Wandoor
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: 14, md: 16 },
        marginBottom: 1,
      }}
    >
      Contact: +91 9745 322 400
    </Typography>
  </Box>
</Box>

<Box>
  <Footer/>
</Box>


    </>
  );
}
