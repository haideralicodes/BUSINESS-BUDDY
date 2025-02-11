import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Header } from "../../components";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Subscriptions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [subscriptions, setSubscriptions] = useState([]);
  const [paymentIntents, setPaymentIntents] = useState([]);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetch("http://localhost:4000/payment/paymentIntents")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPaymentIntents(data.data);
        const subscriptionData = data.data.map((payment) => {
          const customerEmail = payment.receipt_email || "No Email"; // Check if receipt_email exists

          return {
            id: payment.id,
            email: customerEmail, // Use receipt_email directly or fallback to "No Email"
            paymentAmount: `$${(payment.amount_received / 100).toFixed(2)}`, // Corrected string interpolation
            paymentDate: new Date(payment.created * 1000).toLocaleDateString(),
          };
        });
        setSubscriptions(subscriptionData);
      })
      .catch((error) => console.error("Error fetching payment intents:", error));
  }, []);

  // Handle subscription cancellation
  const handleCancelSubscription = (subscriptionId) => {
    // You can make an API call to cancel the subscription
    // For now, we will just log the subscriptionId and redirect
    console.log("Canceling subscription with ID:", subscriptionId);
    
    // Redirect to /paymentPlans
    navigate("/paymentPlans");
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "paymentAmount", headerName: "Payment Amount", flex: 1 },
    { field: "paymentDate", headerName: "Payment Date", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleCancelSubscription(params.row.id)}
        >
          Cancel Subscription
        </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Subscriptions" subtitle="Managing User Subscriptions" />
      <Box
        mt="40px"
        height="75vh"
        flex={1}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`, // Corrected template literal usage
          },
          "& .MuiDataGrid-iconSeparator": {
            color: colors.primary[100],
          },
        }}
      >
        <DataGrid
          rows={subscriptions} // Use the mapped subscription data
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Subscriptions;
