import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, CircularProgress, Card, CardContent } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';

const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 4000); // Redirect after 4 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f8ff',
        padding: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            maxWidth: 400,
            textAlign: 'center',
            p: 4,
            boxShadow: 5,
            borderRadius: '16px',
            background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
          }}
        >
          <CardContent>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            >
              <CheckCircleOutlineIcon
                sx={{
                  fontSize: 80,
                  color: '#28a745',
                  marginBottom: 2,
                }}
              />
            </motion.div>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{ color: '#2c3e50' }}
            >
              Payment Successful!
            </Typography>
            <Typography variant="body1" sx={{ color: '#34495e' }} gutterBottom>
              Redirecting to your dashboard...
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <CircularProgress color="success" sx={{ mt: 2 }} />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <Button
                variant="outlined"
                sx={{
                  mt: 4,
                  color: '#2c3e50',
                  borderColor: '#2c3e50',
                  ':hover': {
                    backgroundColor: '#2c3e50',
                    color: '#ffffff',
                  },
                }}
                onClick={() => navigate('/dashboard')}
              >
                Go to Dashboard Now
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Payment;