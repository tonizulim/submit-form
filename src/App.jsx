import { useState } from 'react'
import TemaContext from "./components/context"
import Personal_data from './components/personal_data'
import Confirm_data from './components/confirm_data'

import './App.css'

function App() {

  const [tema, postaviTemu] = useState("light")
 
  function promjenaTeme(){
    postaviTemu(tema == "light" ? "dark" : "light")
  }
  //podatci
  const [name, setName]=useState("");
  const [surname, setSurname]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setPhone]=useState(0);

  const [country, setCountry] = useState(null);
  const [city, setCity]=useState("");
  const [adress, setAdress]=useState("");

  const [payment_method, setPayment_method] = useState('');
  const [terms_of_the_order, setTerms_of_the_order]=useState(false);

  const handleName=(event)=>{
    setName(event.target.value)
  }
  const handleSurname=(event)=>{
    setSurname(event.target.value)
  }
  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const handlePhone=(event)=>{
    setPhone(event.target.value)
  }
  function isValidNumber(number){
    const mobileNumberRegex = /^[0-9]{9,10}$/;
    return mobileNumberRegex.test(number);
  }


  const handleCountry=(event)=>{
    setCountry(event.target.value);
  }
  const handleCity=(event)=>{
    setCity(event.target.value);
  }
  const handleAdress=(event)=>{
    setAdress(event.target.value);
  }


  const handlePayment_method = (event) => {
    setPayment_method(event.target.value);
  };

  const handleTerms_of_the_order=()=>{
    setTerms_of_the_order(!terms_of_the_order);
  }


  const [IsFilled, setIsFilled] = useState(false);

  const CheckIsFilled=()=>{
    if(name.length!=0 && surname.length!=0 && adress.length!=0 && phone.length!=0 && isValidNumber(phone) &&
      email.length!=0 && isValidEmail(email) && country.length!=0 && city.length!=0 && payment_method.length!=0){
      setIsFilled(true);
      return true
    }
    else{
      setIsFilled(false);
      return false;
    }
  }

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const HandleSubmitClicked=()=>{
    setIsSubmitClicked(true);

    if(CheckIsFilled() && terms_of_the_order){
      setLandingPage(false);
    }
    else{
      setLandingPage(true);
    }
  }

  const [landingPage, setLandingPage]= useState(true);

  return (
    <>
      <TemaContext.Provider value={tema}>
        <div id='outerBox' className={tema}>
        <div id='innerBox' className={tema}>
          <button onClick={promjenaTeme}>Light/Dark</button>

          {landingPage? <>
          <Personal_data handleName={handleName} handleSurname={handleSurname} handleEmail={handleEmail} 
          handlePhone={handlePhone} handleCountry={handleCountry} handleCity={handleCity} handleAdress={handleAdress} 
          handlePayment_method={handlePayment_method} handleTerms_of_the_order={handleTerms_of_the_order}
          name={name} surname={surname} email={email} phone={phone} country={country} 
          city={city} adress={adress} payment_method={payment_method}></Personal_data>
          <button onClick={HandleSubmitClicked}>submit</button>
          {!isValidNumber(phone) && isSubmitClicked && <p>Unesite točan broj mobitela</p>}
          {!isValidEmail(email) && isSubmitClicked && <p>Unesite točan email</p>}
          {!IsFilled && isSubmitClicked && <p>Ispunite sve podatke</p>}
          {!terms_of_the_order && isSubmitClicked && <p>Prihvati uvjete</p>}
          </>
          :
          <>
          <Confirm_data name={name} surname={surname} email={email} phone={phone} country={country} 
          city={city} adress={adress} payment_method={payment_method}></Confirm_data>
          <button onClick={()=>{
            setLandingPage(true);
            setTerms_of_the_order(false);
            setIsSubmitClicked(false);
          }}>natrag</button>
          <button onClick={()=>{window.location.reload();}}>Pošalji</button>
          </>
        }
          
        </div>
        </div>

      </TemaContext.Provider>
    </>
  )
}

export default App
