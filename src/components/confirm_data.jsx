import './confirm_data.css'

function Confirm_data({name, surname, email, phone, country, city, adress, payment_method}){
    return(
        <>
            <div id="confirm_data_box">
                <h2>Ime: {name}</h2>
                <h2>Prezime: {surname}</h2>
                <h2>Email: {email}</h2>
                <h2>Mobitel: {phone}</h2>
                <h2>Drzava: {country}</h2>
                <h2>Grad: {city}</h2>
                <h2>Adresa: {adress}</h2>
                <h2>Nacin placanja: {payment_method}</h2>
            </div>
        </>
    )
        
}

export default Confirm_data;

