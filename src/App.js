import React from 'react';
import './App.css';
import ContactCard from './ContactCard';

function App() {
    return (
      <div className = "Contacts">
        <ContactCard 
           name = "youtube"
           imageUrl = "youtube-3873587_1920.jpg"
           phone = "00001"
           email = "youtube.com"
        />
            <ContactCard 
           name = "youtube"
           imageUrl = "youtube-3873587_1920.jpg"
           phone = "00001"
           email = "youtube.com"
        />    <ContactCard 
           name = "youtube"
           imageUrl = "youtube-3873587_1920.jpg"
           phone = "00001"
           email = "youtube.com"
        />    <ContactCard 
           name = "youtube"
           imageUrl = "youtube-3873587_1920.jpg"
           phone = "00001"
           email = "youtube.com"
        /> 
        </div>
    )
   }

export default App;