import React from 'react';
import './App.css';

function App() {
   const date = new Date(2019,10,25,10)//year/month/date/time
   const hours = date.getHours()
   let timeOfDay
   
   const styles = {
    fontSize : "100px"
   }

   if(hours < 12) {
     timeOfDay = ' morning'
     styles.color = "red";
   }else if (hours >= 12 && hours < 17) {
     timeOfDay = ' afternoon'
     styles.color = "green";
   }else {
     timeOfDay = ' night'
     styles.color = "blue";
   }

   return (
     <h1 style = {styles}>
       Good{timeOfDay}
      </h1>
  );
}

export default App; 