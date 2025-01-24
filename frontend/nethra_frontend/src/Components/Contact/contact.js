// import React, { useState } from "react";
// import Navbar from "../Navbar/navbar";
// import ContactPageImage from '../../Static/images/contactpage.jpg';
// import { Box, Typography,TextField,Button } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Footer from '../Footer/footer';

// export default function ContactPage() {


//   const [formData,setFormData] = useState({
//     name:"",
//     contact_num:"",
//     place:"",
//     age:"",
//     appointment_date:""
//   });

//   const handleChange = (e) => {
//     const {name,value} = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e)=> {
//     e.preventDefault();
//     console.log('Form Data submitted:',formData);
    
//   }
//   return (
//     <>
//       <Navbar />

//       {/* Carousel Section */}
//       <div id="carouselExample" className="carousel slide">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={ContactPageImage}
//               className="d-block w-100"
//               alt="Contact Image"
//               style={{
//                 width: "100%",
//                 objectFit: "cover",
//                 height: "500px",
//                 maxHeight: "400px",
//               }}
//             />
//             <div
//               className="position-absolute top-50 start-50 translate-middle text-light"
//               style={{
//                 fontSize: "1.2rem",
//                 fontWeight: "bold",
//                 padding: "10px",
//                 backgroundColor: "rgba(0,0,0,0.5)",
//                 borderRadius: "5px",
//                 marginLeft: "-10%",
//               }}
//             >
//               <a
//                 href="/"
//                 className="text-light"
//                 style={{
//                   textDecoration: "none",
//                 }}
//               >
//                 Home
//               </a>
//               <span> →</span>
//               <span>Contact</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Information Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           justifyContent: "flex-start",
//           alignItems: "flex-start",
//           p: 4,
//           gap: 4,
//         //   backgroundColor: "#f0f8ff",
//           borderRadius: "8px",
//           boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//           mt: 4,
//         }}
//       >
//         {/* Appointment Details */}
//         <Box
//           sx={{
//             width: "500px",
//             height: "450px",
//             textAlign: "left",
//             p: 4,
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
//             transition: "transform 0.3s, box-shadow 0.3s",
//             "&:hover": {
//               transform: "translateY(-5px)",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
//             },
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: "bold", mb: 3, color: "#01796f" }}
//           >
//             For Appointment
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <PhoneIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//               +91 9447 444 328
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <EmailIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//               nethraeyecareptmb@gmail.com
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <LocationOnIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//               Near GHS Pattambi, <br /> Perinthalmanna road, Pattambi
//             </Typography>
//           </Box>
//         </Box>




//         <Box
//           sx={{
//             width: "650px",
//             p: 4,
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
//             display: "flex",
//             flexDirection: "column",
//             gap: 3,
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: "bold", mb: 3, color: "#01796f" }}
//           >
//             Book an Appointment
//           </Typography>
//           <TextField
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//           <TextField
//             label="Contact number"
//             name="contact_num"
//             value={formData.contact_num}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//           <TextField
//             label="Place"
//             name="place"
//             value={formData.place}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//             <TextField
//             label="Age"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             fullWidth
//             required
//           />


//         <TextField
//                     label="Appointment Date"
//                     name="appointment_date"
//                     type="date"
//                     value={formData.appointment_date}
//                     onChange={handleChange}
//                     fullWidth
//                     InputLabelProps={{ shrink: true }}
//                     required
//                   />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSubmit}
//             sx={{ mt: 2,backgroundColor: '#01796f' }}
//           >
//             Submit
//           </Button>
//         </Box>

//       </Box>


//           <Footer/>
     
//     </>
//   );
// }


// import React, { useState } from "react";
// import Navbar from "../Navbar/navbar";
// import ContactPageImage from '../../Static/images/contactpage.jpg';
// import { Box, Typography, TextField, Button, Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions, } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Footer from '../Footer/footer';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import axios from "axios";
// import AccessTimeIcon from '@mui/icons-material/AccessTime';

// export default function ContactPage() {
//   const [appointmentData, setAppointmentData] = useState({
//     name: "",
//     contact_num: "",
//     place: "",
//     age: "",
//     appointment_date: ""
//   });

//   const [dialogOpen,setDialogOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAppointmentData({
//       ...appointmentData,
//       [name]: value,
//     });
//   };

//   // const handleSubmit = async () => {
//   //   console.log('Submitting Appointment', appointmentData);
//   //   const formData = new FormData();
//   //   formData.append('name', appointmentData.name);
//   //   formData.append('contact_num', appointmentData.contact_num);
//   //   formData.append('place', appointmentData.place);
//   //   formData.append('age', appointmentData.age);
//   //   formData.append('appointment_date', appointmentData.appointment_date);
  
//   //   try {
//   //     console.log('Sending request');
//   //     const response = await axios.post('http://localhost:8000/create/appointment/', formData, {
//   //       headers: {
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });
  
//   //     console.log('Response:', response);
//   //     console.log("Response Status: ",response.status);
//   //     if (response.status === 201) {
//   //       console.log('Appointment sent successfully');
//   //       setAppointmentData({
//   //         name: '',
//   //         contact_num: '',
//   //         place: '',
//   //         age: '',
//   //         appointment_date: ''
//   //       });
//   //       alert('Appointment submitted successfully!!!');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error submitting appointment:', error);
//   //     alert('Failed to submit the appointment. Please try again later.');
//   //   }
//   // };
  
  
  
//   const handleSubmit = async () => {
//     console.log('Submitting Appointment', appointmentData);
  
//     const formData = new FormData();
//     formData.append('name', appointmentData.name);
//     formData.append('contact_num', appointmentData.contact_num);
//     formData.append('place', appointmentData.place);
//     formData.append('age', appointmentData.age);
//     formData.append('appointment_date', appointmentData.appointment_date);
  
//     try {
//       console.log('Sending request...');
//       const response = await axios.post('http://localhost:8000/create/appointment/', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
  
//       console.log('Response:', response);
//       console.log('Response status:', response.status);
  
//       if (response.status === 200 || response.status === 201) {
//         console.log('Appointment sent successfully');
//         setAppointmentData({
//           name: '',
//           contact_num: '',
//           place: '',
//           age: '',
//           appointment_date: '',
//         });
//         alert('Appointment submitted successfully!!!');
//         setDialogOpen(true);
//       } else {
//         console.error('Unexpected response status:', response.status);
//         alert('Failed to submit the appointment. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error submitting appointment:', error);
//       alert('Failed to submit the appointment. Please try again later.');
//     }
//   };
    
//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//   };



//   return (
//     <>
//       <Navbar />

//       {/* Carousel Section */}
//       <div id="carouselExample" className="carousel slide">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={ContactPageImage}
//               className="d-block w-100"
//               alt="Contact Image"
//               style={{
//                 width: "100%",
//                 objectFit: "cover",
//                 height: "400px",
//                 maxHeight: "400px",
//               }}
//             />
//             <div
//               className="position-absolute top-50 start-50 translate-middle text-light"
//               style={{
//                 fontSize: "1.2rem",
//                 fontWeight: "bold",
//                 padding: "10px",
//                 backgroundColor: "rgba(0,0,0,0.5)",
//                 borderRadius: "5px",
//                 marginLeft: "-10%",
//               }}
//             >
//               <a
//                 href="/"
//                 className="text-light"
//                 style={{
//                   textDecoration: "none",
//                 }}
//               >
//                 Home
//               </a>
//               <span> →</span>
//               <span>Contact</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Information Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           justifyContent: "center",
//           alignItems: "flex-start",
//           p: { xs: 2, sm: 4 },
//           gap: { xs: 2, md: 4 },
//           mt: 4,
//         }}
//       >
//         {/* Appointment Details */}
//         <Box
//           sx={{
//             flex: 1,
//             p: { xs: 2, sm: 4 },
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
//             transition: "transform 0.3s, box-shadow 0.3s",
//             "&:hover": {
//               transform: "translateY(-5px)",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
//             },
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: "bold", mb: 3, color: "#01796f" }}
//           >
//             For Appointment
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <PhoneIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//               +91 9447 444 328
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <EmailIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//               nethraeyecareptmb@gmail.com
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <LocationOnIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//               Near GHS Pattambi, <br /> Perinthalmanna road, Pattambi
//             </Typography>
//           </Box>

//           <Box>
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: "bold", mb: 3, color: "#01796f" }}> Optical Shop Timing</Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <CalendarMonthIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//               Monday to Saturday
//             </Typography>
//           </Box>  
//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <AccessTimeIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//              09:00 AM to 08:00 PM
//             </Typography>
//           </Box>  



//           <Box 
//           sx={{
//             marginTop: 5
//           }}>
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: "bold", mb: 3, color: "#01796f" }}>Doctor Timing</Typography>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <CalendarMonthIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//               Monday to Saturday
//             </Typography>
//           </Box>  
//           <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
//             <AccessTimeIcon sx={{ mr: 2, color: "#01796f", fontSize: "2rem" }} />
//             <Typography
//               variant="body1"
//               sx={{ fontSize: "1.2rem", color: "#333" }}
//             >
//              09:00 AM to 01:00 PM
//             </Typography>
//           </Box> 


//           <Typography variant="h5" sx={{color: 'red'}}>Sunday is Holiday !!!!!!!!</Typography> 
//         </Box>

//         {/* Appointment Form */}
//         <Box
//           sx={{
//             flex: 2,
//             p: { xs: 2, sm: 4 },
//             backgroundColor: "#fff",
//             borderRadius: "8px",
//             boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
//             display: "flex",
//             flexDirection: "column",
//             gap: 3,
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: "bold", mb: 3, color: "#01796f" }}
//           >
//             Book an Appointment
//           </Typography>
//           <TextField
//             label="Name"
//             name="name"
//             value={appointmentData.name}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//           <TextField
//             label="Contact number"
//             name="contact_num"
//             value={appointmentData.contact_num}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//           <TextField
//             label="Place"
//             name="place"
//             value={appointmentData.place}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//           <TextField
//             label="Age"
//             name="age"
//             value={appointmentData.age}
//             onChange={handleChange}
//             fullWidth
//             required
//           />
//           <TextField
//             label="Appointment Date"
//             name="appointment_date"
//             type="date"
//             value={appointmentData.appointment_date}
//             onChange={handleChange}
//             fullWidth
//             InputLabelProps={{ shrink: true }}
//             required
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSubmit}
//             sx={{ mt: 2, backgroundColor: '#01796f' }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Box>
//       <Dialog open={dialogOpen} onClose={handleCloseDialog}>
//         <DialogTitle>Appointment Confirmation</DialogTitle>
//         <DialogContent>
//           <Typography>
//             For confirm your appointment Call to: +91 9447 444 328
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             OK
//           </Button>
//         </DialogActions>
//       </Dialog>
//       <Footer />
//     </>
//   );
// }

import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import ContactPageImage from '../../Static/images/contactpage.jpg';
import { Box, Typography, TextField, Button, Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,CircularProgress } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from '../Footer/footer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axios from "axios";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function ContactPage() {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    contact_num: '',
    place: '',
    age: '',
    appointment_date: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true); // Show loading spinner
    console.log('Submitting Appointment', appointmentData);

    const formData = new FormData();
    formData.append('name', appointmentData.name);
    formData.append('contact_num', appointmentData.contact_num);
    formData.append('place', appointmentData.place);
    formData.append('age', appointmentData.age);
    formData.append('appointment_date', appointmentData.appointment_date);

    try {
      console.log('Sending request...');
      const response = await axios.post('http://localhost:8000/create/appointment/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Response:', response);
      console.log('Response status:', response.status);

      if (response.status === 200 || response.status === 201) {
        console.log('Appointment sent successfully');
        setAppointmentData({
          name: '',
          contact_num: '',
          place: '',
          age: '',
          appointment_date: '',
        });
        alert('Appointment submitted successfully!!!');
        setDialogOpen(true); // Open the dialog box
      } else {
        console.error('Unexpected response status:', response.status);
        alert('Failed to submit the appointment. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      alert('Failed to submit the appointment. Please try again later.');
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Navbar />

      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={ContactPageImage}
              className="d-block w-100"
              alt="Contact Image"
              style={{
                width: '100%',
                objectFit: 'cover',
                height: '400px',
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
                marginLeft: '-10%',
              }}
            >
              <a
                href="/"
                className="text-light"
                style={{
                  textDecoration: 'none',
                }}
              >
                Home
              </a>
              <span> →</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'flex-start',
          p: { xs: 2, sm: 4 },
          gap: { xs: 2, md: 4 },
          mt: 4,
        }}
      >
        {/* Appointment Details */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2, sm: 4 },
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 3, color: '#01796f' }}
          >
            For Appointment
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <PhoneIcon sx={{ mr: 2, color: '#01796f', fontSize: '2rem' }} />
            <Typography
              variant="body1"
              sx={{ fontSize: '1.2rem', color: '#333' }}
            >
              +91 9447 444 328
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <EmailIcon sx={{ mr: 2, color: '#01796f', fontSize: '2rem' }} />
            <Typography
              variant="body1"
              sx={{ fontSize: '1.2rem', color: '#333' }}
            >
              nethraeyecareptmb@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <LocationOnIcon sx={{ mr: 2, color: '#01796f', fontSize: '2rem' }} />
            <Typography
              variant="body1"
              sx={{ fontSize: '1.2rem', color: '#333' }}
            >
              Near GHS Pattambi, <br /> Perinthalmanna road, Pattambi
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', mb: 3, color: '#01796f' }}
            >
              Optical Shop Timing
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <CalendarMonthIcon
              sx={{ mr: 2, color: '#01796f', fontSize: '2rem' }}
            />
            <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#333' }}>
              Monday to Saturday
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <AccessTimeIcon
              sx={{ mr: 2, color: '#01796f', fontSize: '2rem' }}
            />
            <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#333' }}>
              09:00 AM to 08:00 PM
            </Typography>
          </Box>

          <Box sx={{ marginTop: 5 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', mb: 3, color: '#01796f' }}
            >
              Doctor Timing
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <CalendarMonthIcon
              sx={{ mr: 2, color: '#01796f', fontSize: '2rem' }}
            />
            <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#333' }}>
              Monday to Saturday
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <AccessTimeIcon
              sx={{ mr: 2, color: '#01796f', fontSize: '2rem' }}
            />
            <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#333' }}>
              09:00 AM to 01:00 PM
            </Typography>
          </Box>

          <Typography variant="h5" sx={{ color: 'red' }}>
            Sunday is Holiday !!!!!!!!
          </Typography>
        </Box>

        {/* Appointment Form */}
        <Box
          sx={{
            flex: 2,
            p: { xs: 2, sm: 4 },
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', mb: 3, color: '#01796f' }}
          >
            Book an Appointment
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={appointmentData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Contact number"
            name="contact_num"
            value={appointmentData.contact_num}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Place"
            name="place"
            value={appointmentData.place}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Age"
            name="age"
            value={appointmentData.age}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Appointment Date"
            name="appointment_date"
            type="date"
            value={appointmentData.appointment_date}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              mt: 3,
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: '#01796f',
              '&:hover': {
                backgroundColor: '#015c4d',
              },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
          </Button>
        </Box>
      </Box>

      {/* Dialog for Success */}
      <Dialog 
  open={dialogOpen} 
  onClose={handleCloseDialog} 
  fullWidth
  maxWidth="sm"
  sx={{
    '& .MuiDialog-paper': {
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
  }}
>
  <DialogTitle 
    sx={{
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1976d2',
    }}
  >
    Appointment Submitted
  </DialogTitle>
  <DialogContent 
    sx={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }}
  >
    <Typography variant="body1" sx={{ fontSize: '1rem', color: '#555' }}>
      For confirming your appointment, please call:
    </Typography>
    <Typography 
      variant="body1" 
      sx={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#1976d2',
        wordBreak: 'break-word',
      }}
    >
      +91 9447 444 328
    </Typography>
  </DialogContent>
  <DialogActions 
    sx={{
      justifyContent: 'center',
      paddingBottom: '16px',
    }}
  >
    <Button 
      onClick={handleCloseDialog} 
      variant="contained" 
      color="primary"
      sx={{
        borderRadius: '8px',
        padding: '8px 16px',
        fontSize: '1rem',
        textTransform: 'none',
      }}
    >
      Close
    </Button>
  </DialogActions>
</Dialog>


      <Footer />
    </>
  );
}
