import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';
import axios from 'axios';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSuccess, setIsSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send the form data to the backend to be saved in LeadMail
    try {
      const response = await axios.post('http://localhost:4000/leadMails/leadmail', formData);
      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setIsSuccess(false);
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container sx={{width:"80vw"}}>
      <Box sx={{ textAlign: 'center'}}>
        <Typography fontSize={50} fontWeight={600} gutterBottom color='black'>
          Contact Us
        </Typography>
        <Typography variant="body1" color="black" paragraph >
          We would love to hear from you! Please fill in the form below and we will get back to you as soon as possible.
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            width: '100%',
            padding: '15px',
            backgroundColor: '#003049',
            '&:hover': {
              backgroundColor: '#001f2d',
            },
          }}
        >
          Send Message
        </Button>

        <br /><br /><br /><br /><br /><br /><br /><br />

        {isSuccess !== null && (
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: isSuccess ? 'green' : 'red',
            }}
          >
            {isSuccess ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default ContactUs;
