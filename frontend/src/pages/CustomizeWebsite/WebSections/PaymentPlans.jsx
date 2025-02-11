import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Typography,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaCheck, FaCrown, FaRocket, FaStar } from "react-icons/fa";
import axios from "axios";

// Styled components
const StyledCard = styled(Card)(({ theme, isPopular }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
  },
  position: "relative",
//   border: isPopular ? 2px solid ${theme?.palette?.primary?.main} : "none", 
}));

const PlanBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: "4px 12px",
  borderRadius: "16px",
  fontSize: "0.875rem",
}));

// Plan data
const plans = [
  {
    name: "Starter",
    price: "$9.99/month",
    features: [
      "Customizable website templates",
      "Basic social media scheduling",
      "Email Support",
      "1 GB Storage",
      "Basic support",
    ],
    buttonText: "Select Starter Plan",
    icon: <FaStar />,
    amount: 999, // Amount in cents
  },
  {
    name: "Pro",
    price: "$29.99/month",
    features: [
      "All features in the Starter Plan",
      "Advanced website customization",
      "Unlimited social media scheduling",
      "10 GB storage",
      "Priority support",
      "Advanced support",
      "Post and Caption Generation",
    ],
    buttonText: "Select Pro Plan",
    icon: <FaRocket />,
    isPopular: true,
    amount: 2999, // Amount in cents
  },
  {
    name: "Business",
    price: "$49.99/month",
    features: [
      "Customizable website templates",
      "Basic social media scheduling",
      "Email Support",
      "1 GB Storage",
      "Basic support",
    ],
    buttonText: "Select Business Plan",
    icon: <FaCrown />,
    amount: 4999, // Amount in cents
  },
];

const PaymentPlans = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSubscribe = async (plan) => {
    setSelectedPlan(plan.name);
    setOpenSnackbar(true);

    try {
      console.log(`Initiating payment for: ${plan.name} (${plan.amount})`);
      const response = await axios.post(
        "http://localhost:4000/payment/create-checkout-session",
        { amount: plan.amount }
      );

      console.log("Response:", response.data); // Debugging
      if (response.data?.url) {
        window.location.href = response.data.url; // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error("Error redirecting to checkout:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Choose Your Plan
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Select the perfect plan for your needs
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {plans.map((plan) => (
          <Grid item key={plan.name} xs={12} sm={6} md={4}>
            <StyledCard isPopular={plan.isPopular} elevation={4}>
              {plan.isPopular && <PlanBadge>Most Popular</PlanBadge>}
              <CardHeader
                avatar={plan.icon}
                title={
                  <Typography variant="h4" component="h2">
                    {plan.name}
                  </Typography>
                }
                subheader={
                  <Typography variant="h3" color="primary" sx={{ mt: 2 }}>
                    {plan.price}
                    <Typography variant="subtitle1" component="span">
                      /month
                    </Typography>
                  </Typography>
                }
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                sx={{ pb: 0 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <List>
                  {plan.features.map((feature, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <FaCheck color="#2e7d32" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  fullWidth
                  variant={plan.isPopular ? "contained" : "outlined"}
                  color="primary"
                  size="large"
                  onClick={() => handleSubscribe(plan)}
                  sx={{ mt: 2 }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully subscribed to {selectedPlan} plan!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default PaymentPlans;