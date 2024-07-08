import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Box, Button, TextField, Container, Typography } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

//   const handleInput = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch('http://localhost:4000/forgot-password', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email }),
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (res.status === 200) {
//       toast.success('Password reset link sent to your email');
//       navigate('/');
//     } else {
//       toast.error(data.message || 'Something went wrong');
//     }
//   };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter your email to reset your password
        </Typography>
        <Box component="form" noValidate >
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={email}
            // onChange={handleInput}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 3 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </Box>
        <Toaster />
      </Box>
    </Container>
  );
};

export default ForgotPassword;
