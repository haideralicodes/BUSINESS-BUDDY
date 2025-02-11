import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const LeadMail = () => {
  const [leadMails, setLeadMails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeadMails = async () => {
      try {
        const response = await axios.get('http://localhost:4000/leadMails/leadmail');
        setLeadMails(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lead mails:', error);
        setLoading(false);
      }
    };

    fetchLeadMails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper} sx={{ width: "930px", ml: 5, mt: 10 }}>
      <Table sx={{ minWidth: 800 }} aria-label="lead mail table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Message</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leadMails.map((leadMail) => (
            <StyledTableRow key={leadMail._id}>
              <StyledTableCell component="th" scope="row">
                {leadMail.name}
              </StyledTableCell>
              <StyledTableCell align="right">{leadMail.email}</StyledTableCell>
              <StyledTableCell align="right">{leadMail.message}</StyledTableCell>
              <StyledTableCell align="right">{new Date(leadMail.createdAt).toLocaleString()}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeadMail;
