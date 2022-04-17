import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { useState } from 'react';
import { AddUser } from './utils/functions';

const initialValues={
  username:"",
  phoneNumber:"",
  gender:"NO ıNFO"
}

function App() {
  const [info, setInfo] = useState(initialValues)
   const handleFormSubmit=(e)=>{
     e.preventDefault()
     console.log(info)
     AddUser(info)
   }
   const editHandler=(id,username,phoneNumber,gender)=>{
    setInfo({id,username,phoneNumber,gender})
  }
 
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
      <Contacts editHandler={editHandler}/>
    </div>
  );
}

export default App;
