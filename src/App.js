
import './App.css'; // Keep the existing CSS imports
import React, { useState } from 'react';
import axios from 'axios';

const CourierRegistration = () => {
  // Inline styles for text fields and buttons with border radius and updated colors
  const textFieldStyle = {
    padding: '5px',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '10px', // Rounded corners for text fields
    border: '1px solid #ccc', // Border style
  };

  const gapStyle = {
    padding: '0 5px', // Small gap between elements
  };

  const updateButtonStyle = {
    marginLeft: '5px',
    padding: '10px',
    border: 'none',
    borderRadius: '10px', // Rounded corners
    background: '#4CAF50', // Green color for Submit button
    color: 'white',
    cursor: 'pointer',
  };

  const deleteButtonStyle = {
    marginLeft: '5px',
    padding: '5px',
    border: 'none', // Remove border
    borderRadius: '5px', // Rounded corners for buttons
    background: '#FF0000', // Red color for Delete button
    color: 'white', // White text on buttons
    cursor: 'pointer',
  };

  const submitButtonStyle = {
    marginLeft: '5px',
    padding: '10px',
    border: 'none',
    borderRadius: '10px', // Rounded corners
    background: '#4CAF50', // Green color for Submit button
    color: 'white',
    cursor: 'pointer',
  };

  const searchButtonStyle = {
    marginLeft: '5px',
    padding: '10px',
    border: 'none',
    borderRadius: '10px', // Rounded corners
    background: '#4CAF50', // Green color for Submit button
    color: 'white',
    cursor: 'pointer',
  };

  // Define the style for the heading with a border, bold, and italic
  const headingStyle = {
    fontWeight: 'bold', // Bold text
    fontStyle: 'italic', // Italic text
    color: 'white', // White text color
    border: '2px solid black', // Border with black color
    padding: '10px', // Padding to ensure border doesn't cut the text
    textShadow: '4px 4px 4px black',
  };

  const [id,setId] = useState(''); // State for Courier ID
  const [name, setName] = useState(''); // State for Courier Name
  const [contactNumber, setContactNumber] = useState(''); // State for Courier Contact Number
  const [deliveryArea, setDeliveryArea] = useState(''); // State for Delivery Area

  // Event handler for creating a new Courier
  const handleCreate = async () => {
    try {
      await axios.post('https://api-ad.tharuksha.com/api/couriers/', {
        id:id,
        name: name,
        contactNumber: contactNumber,
        deliveryArea: deliveryArea,
      });
      alert('Courier created successfully');
    } catch (error) {
      console.error('Error creating courier:', error);
      alert('Error creating courier');
    }
  };

  // Event handler for updating an existing Courier
  const handleUpdate = async () => {
    if (id) {
      try {
        await axios.put(`https://api-ad.tharuksha.com/api/couriers/${id}`, {
          id:id,
          name: name,
          contactNumber: contactNumber,
          deliveryArea: deliveryArea,
        });
        alert('Courier updated successfully');
      } catch (error) {
        console.error('Error updating courier:', error);
        alert('Error updating courier');
      }
    } else {
      alert('Please provide a valid Courier ID to update.');
    }
  };

  // Event handler for deleting a Courier
  const handleDelete = async () => {
    if (id) {
      try {
        await axios.delete(`https://api-ad.tharuksha.com/api/couriers/${id}`);
        alert('Courier deleted successfully');
      } catch (error) {
        console.error('Error deleting courier:', error);
        alert('Error deleting courier');
      }
    } else {
      alert('Please provide a valid Courier ID to delete.');
    }
  };

  // Event handler for searching a Courier by ID
  const handleSearch = async () => {
    if (id) {
      try {
        const response = await axios.get(`https://api-ad.tharuksha.com/api/couriers/${id}`);
        if (response.data) {
          const courier = response.data;
          setName(courier.name || '');
          setContactNumber(courier.contactNumber || '');
          setDeliveryArea(courier.deliveryArea || '');
          alert('Courier found');
        } else {
          alert('Courier not found');
        }
      } catch (error) {
        console.error('Error searching for courier:', error);
        alert('Error searching for courier');
      }
    } else {
      alert('Please provide a valid Courier ID to search.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Heading with border, bold, and italic */}
      <h2 style={headingStyle}>Welcome! Register below</h2>

      {/* ID Text Field with buttons */}
      <div style={textFieldStyle}>
        <input type="text" placeholder="Enter ID" style={{ flex: 1 }}  value={id} onChange={(e) => setId(e.target.value)}  />
        <span style={gapStyle}></span>
       
      </div>

      {/* Name Text Field with buttons */}
      <div style={textFieldStyle}>
        <input type="text" placeholder="Enter Name" style={{ flex: 1 }} value={name} onChange={(e) =>setName(e.target.value)}/>
        <span style={gapStyle}></span>
       
     
      </div>

      {/* Contact Number Text Field with buttons */}
      <div style={textFieldStyle}>
        <input type="text" placeholder="Enter Contact Number" style={{ flex: 1 }}  value={contactNumber} onChange={(e) =>setContactNumber(e.target.value)} />
        <span style={gapStyle}></span>
     
     
      </div>

      {/* Delivery Area Text Field with buttons */}
      <div style={textFieldStyle}>
        <input type="text" placeholder="Enter Delivery Area" style={{ flex: 1 }}  value={deliveryArea} onChange={(e) =>setDeliveryArea(e.target.value)} />
        <span style={gapStyle}></span>
      
       
      </div>

      {/* New Submit and Search Buttons */}
      <div style={{ marginTop: '30px' }}>
        <button style={submitButtonStyle} onClick={handleCreate}>Submit</button>
        <span style={gapStyle}></span>
        <button style={searchButtonStyle} onClick={handleSearch}>Search</button>
        <span style={gapStyle}></span>
        <button style={updateButtonStyle} onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

function App() {
  const appStyle = {
    backgroundColor: '#484848', // Background color as specified
    height: '100vh', // Full viewport height
    padding: '20px', // Padding for the content
  };

  return (
    <div className="App" style={appStyle}>
      <CourierRegistration /> {/* Add the CourierRegistration component */}
    </div>
  );
}

export default App;
