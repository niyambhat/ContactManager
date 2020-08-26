import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import Contacts from './components/Contacts/Contacts'
import AddContact from './components/Contacts/AddContact'
import Provider from './components/Context'
import './App.css';



function App() {
  return (

    <Provider>

    <div className="App">
      <Header branding="contacto"/>
      <div className="container">
      <AddContact/>
        <Contacts/>
       
        </div>    
    </div>

    </Provider>
  );
}

export default App;
