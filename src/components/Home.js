// Home.js
import React from 'react';


const homeStyles = {
  homeContainer: {
    backgroundColor: 'lightgrey',
    minHeight: '100vh',
  },
  mainHeading: {
    color: '#333',
    fontSize: '36px',
    marginBottom: '16px',
  },
  subHeading: {
    color: '#666',
    fontSize: '18px',
    textAlign: 'center',
  },
};

const Home = () => {
  return (
  
    <div>
          
          <center><h1 style={homeStyles.mainHeading}>
            WELCOME TO ONLINE VOTING SYSTEM
          </h1>
          </center>
          <p style={homeStyles.subHeading}>Right to Vote is an eVoting platform which enables you to create and manage elections!</p>
        

      {/* Grid of product cards */}
      
    <div style={{ 
      backgroundImage: "url('https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjAtMTEvM2JjOTE2NzUtYjY0Ny00NjE1LTgzZGYtMzBiMDFkNjE0NzhiLmpwZw==.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '75vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      </div>
      </div>
  );
  
};

export default Home;