import { useContext } from 'react';
import TemaContext from "./context"

import './personal_data.css'

function Personal_data({handleName, handleSurname, handleEmail, handlePhone, handleCountry, handleCity, handleAdress, 
    handlePayment_method, handleTerms_of_the_order, name, surname, email, phone, country, city, adress, payment_method}){

    const tema = useContext(TemaContext)
    
    return (
        <>
            <div id="Personal_data_box" className={tema}>

                <h2>Kontakt</h2>

                <div id='contact' className='input_div'>
                    
                    <label htmlFor="Name">Ime</label>
                    <input id="Name" type='text' value={name} onChange={handleName}></input>
                    <label htmlFor="Surname">Prezime</label>
                    <input id="Surname" type='text' value={surname} onChange={handleSurname}></input>
                    <label htmlFor="Email">Email</label>
                    <input id="Email" type='text' value={email} onChange={handleEmail}></input>
                    <label htmlFor="Phone">Mobitel</label>
                    <input id="Phone" type='number' value={phone} onChange={handlePhone}></input>
                    
                </div>

                <h2>Adresa</h2>

                <div id='adress' className='input_div'>

                    <label htmlFor="">Odaberi drzavu</label>
                    <select onChange={handleCountry}>
                        <option value="">{country}</option>
                        <option value="Albanija">Albanija</option>
                        <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
                        <option value="Bugarska">Bugarska</option>
                        <option value="Crna Gora">Crna Gora</option>
                        <option value="Hrvatska">Hrvatska</option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Makedonija">Makedonija</option>
                        <option value="Sjeverna Makedonija">Sjeverna Makedonija</option>
                        <option value="Srbija">Srbija</option>
                        <option value="Srbija">Srbija</option>
                        <option value="Slovenija">Slovenija</option>
                    </select>
                    <label htmlFor="City">Grad</label>
                    <input id="City" type='text' value={city} onChange={handleCity}></input>
                    <label htmlFor="Adress">Adresa</label>
                    <input id="Adress" type='text' value={adress} onChange={handleAdress}></input>
                </div>

                <h2>Nacin placanja</h2>

                <div id='paymentMethod' className='input_div'>

                    <label>
                        <input type='radio' name='paymentMethod' checked={payment_method=='cash'} value="cash" onChange={handlePayment_method}></input>
                    gotovina</label>

                    <label >
                        <input type='radio' name='paymentMethod' checked={payment_method=='card'} value="card" onChange={handlePayment_method}></input>
                    kartica</label>

                </div>

                <div id="Terms_of_the_order_div">
                    <label>
                        <input type="checkbox" onClick={handleTerms_of_the_order}></input>
                    Prihvacam uvjete narudbe</label>
                </div>

            </div>
        </>
    )
}

export default Personal_data;