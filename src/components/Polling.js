import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Polling = () => {
  const [selectedParty, setSelectedParty] = useState(null);
  const [party1, setParty1] = useState({ name: 'Party 1', image: 'https://3.bp.blogspot.com/-8UWg69dcd_c/UbcKwss69yI/AAAAAAAACLI/SDU6XrHorX4/s1600/tdp-logo.jpg', tickOption: false });
  const [party2, setParty2] = useState({ name: 'Party 2', image: 'https://3.bp.blogspot.com/-5NB84OZ7Mk4/UjKIsyC6a5I/AAAAAAAAAJM/_YNU3CLqEts/s1600/YSR+Congress+Flag+(1).jpg', tickOption: false });
  const navigate = useNavigate();

  const handlePartySelect = (party) => {
    setSelectedParty(party);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedPartyData = selectedParty === 'party1' ? party1 : party2;
    const pollData = {
      selectedParty,
      party: selectedPartyData
    };
    // Here you would send the pollData to the backend using fetch or axios
    console.log('Submitted poll data:', pollData);
    navigate('/Submit');
  };

  return (
    <div style={{ 
      backgroundImage: "url('https://www.surrey.ac.uk/sites/default/files/styles/1200xauto/public/2020-10/GettyImages-1226256523%20(1).jpg?itok=Xkvbamdn')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1><center>Welcome to Online Voting System</center></h1>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="radio" id="party1" name="selectedParty" value="party1" checked={selectedParty === 'party1'} onChange={() => handlePartySelect('party1')} />
          <label htmlFor="party1" style={{ marginRight: '10px' }}>{party1.name}</label>
          {party1.image && <img src={party1.image} alt="Party 1" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="radio" id="party2" name="selectedParty" value="party2" checked={selectedParty === 'party2'} onChange={() => handlePartySelect('party2')} />
          <label htmlFor="party2" style={{ marginRight: '10px' }}>{party2.name}</label>
          {party2.image && <img src={party2.image} alt="Party 2" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        </div>
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default Polling;
