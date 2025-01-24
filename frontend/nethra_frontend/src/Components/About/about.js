import React from "react";
import AboutImage from  '../../Static/images/About1.jpg'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Typography } from "@mui/material";
import Opticals from '../../Static/images/Opticals.jpeg';
import Navbar from "../Navbar/navbar";
import { color } from "framer-motion";
import Footer from "../Footer/footer";

export default function AboutPage() {
  return (
   <>
   <Navbar/>
   <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img 
            src={AboutImage} 
            className="d-block w-100" 
            alt="About Image"
            style={{
              width: '100%',
              objectFit: 'cover',
              height: '500px',
              maxHeight: '400px',
            }} 
          />
          <div
            className="position-absolute top-50 start-50 translate-middle text-light"
            style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                padding: '10px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: '5px',
                marginLeft: '40%'
            }}
>
    <a href="/" className="text-light" style={{
        textDecoration: 'none'
    }}>Home</a>
    <span> →</span>
    <span>About</span>

          </div>
        </div>
      </div>
    </div>


    <Box>

    <Box
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      sx={{
        marginTop: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
      }}
    >
    <Box
      component="img"
      src={Opticals}
      alt=""
      sx={{
        height: { xs: 150, sm: 200, md: 300, lg: 400 },
        width: { xs: "90%", sm: "70%", md: "60%", lg: "50%" }, 
        margin: "auto", 
      }}
    />
  </Box>
  </Box>
  
  <Box
  display="flex"
  justifyContent="flex-start" 
  alignItems="center"
  sx={{
    marginTop: { sx: "20px", sm: "30px", md: "40px", lg: "50px" },
    paddingLeft: { xs: "10px", sm: "20px", md: "30px", lg: "40px" }, 
  }}
>
  <Typography
    sx={{
      fontSize: { xs: "24px", sm: "36px", md: "48px", lg: "60px" },
      fontWeight: "bold",
      color: "#01796f",
      textAlign: "left", 
    }}
  >
    Nethra Eye Care
  </Typography>
 
 
</Box>
<Typography sx={{marginLeft: 10}}>
    (Eye clinic & Opticals)
  </Typography>
<Box
  sx={{
    paddingLeft: { xs: "10px", sm: "20px", md: "30px", lg: "40px" }, 
    paddingRight: { xs: "10px", sm: "20px", md: "30px", lg: "40px" }, 
    marginTop: { xs: "20px", sm: "30px", md: "40px", lg: "50px" }, 
  }}
>
  <Typography
    sx={{
      fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "18px" }, 
      lineHeight: 1.6, 
      color:'GrayText',
      fontFamily: 'sans-serif'
    }}
  >
At Nethra Eyecare Opticals, located in the vibrant city of Pattambi, we take immense pride in redefining customer service and satisfaction in the optical industry. With over 25 years of expertise, we are committed to offering innovative vision care solutions that elevate the experience of every customer. As a distinguished member of the renowned <strong>Popular Opticals</strong> family, Nethra Eyecare Opticals is part of a legacy that includes esteemed brands like <strong>Brothers Opticals, Popular Opticals, Eye Point Opticals, and Nethra Eye Hospital</strong>.

Our journey has been one of continuous growth, innovation, and customer-centric excellence. With a focus on providing unparalleled eyewear and optical services, Nethra Eyecare Opticals is proud to offer the largest collection of both international and domestic eyewear brands. This dedication has helped us earn recognition as one of the leaders in the optical retailing industry in the region.

We are unwavering in our commitment to delivering high-quality products at competitive prices, offering a wide array of eyewear options to suit all tastes, needs, and budgets. Whether you're looking for premium international brands, trendy eyewear, or affordable eye care solutions, Nethra Eyecare Opticals is your one-stop destination.

Our focus on delivering exceptional value and trendsetting eyewear sets us apart. We strive to provide unmatched customer experiences by integrating the latest advancements in optical technology with personalized service. Our core values are rooted in customer satisfaction, and we continuously aim to raise the bar in the optical industry by managing and developing our people, products, and services with excellence.

At Nethra Eyecare Opticals, we are not just selling eyewear; we are creating long-lasting relationships with our customers, ensuring that every visit leaves them with a brighter vision and a smile.
  
  </Typography>
</Box>




<Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        justifyContent: 'space-between',
        gap: 4, 
        p: 4, 
        backgroundColor: '#f9f9f9', 
        borderRadius: 2, 
        boxShadow: 2, 
      }}
    >
      {/* Vision Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' }, 
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#01796f' }}>
          Vision
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          "To be a trusted leader in eye care, inspiring confidence and improving vision for generations. 
          Our vision is to foster a healthier, clearer world by combining expertise with empathy and ensuring every patient experiences the highest standard of care."
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' }, 
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#01796f' }}>
          Mission
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          At Nethra Eye Care, our mission is to provide comprehensive, compassionate, and state-of-the-art eye care to our community. 
          We are dedicated to preserving and enhancing vision through personalized care, advanced diagnostics, and innovative treatments.
          With a focus on excellence and trust, we aim to improve the quality of life for our patients by delivering exceptional eye health services and high-quality optical solutions.
        </Typography>
      </Box>
    </Box>




<Box sx={{marginTop: 3}}>
  <Footer/>
</Box>



</>
  );
}
