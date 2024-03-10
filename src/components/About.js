import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

function OnlineVotingSystem() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom style={{ color: 'blue' }}>Online Voting System</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#f0f0f0' }}>
            <Typography variant="h5" gutterBottom style={{ color: 'green' }}>Our Mission</Typography>
            <Typography style={{ color: 'black' }}>
              Our mission is to provide a secure and accessible platform for democratic participation through online voting.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#e0e0e0' }}>
            <Typography variant="h5" gutterBottom style={{ color: 'green' }}>Voter Participation</Typography>
            <Typography style={{ color: 'black' }}>
              Our online voting system enables millions of eligible voters to conveniently cast their votes from anywhere in the world.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#d0d0d0' }}>
            <Typography variant="h5" gutterBottom style={{ color: 'green' }}>Security Measures</Typography>
            <Typography style={{ color: 'black' }}>
              We employ state-of-the-art security protocols and encryption techniques to ensure the integrity and confidentiality of each vote.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#c0c0c0' }}>
            <Typography variant="h5" gutterBottom style={{ color: 'green' }}>Features</Typography>
            <Typography style={{ color: 'black' }}>
              Our online voting system offers a comprehensive set of features including:
              <ul>
                <li>Secure Voter Authentication</li>
                <li>Encrypted Ballot Submission</li>
                <li>Real-time Results Tracking</li>
                <li>Accessibility Options for Disabled Voters</li>
                <li>Multi-language Support</li>
                <li>And much more...</li>
              </ul>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OnlineVotingSystem;
