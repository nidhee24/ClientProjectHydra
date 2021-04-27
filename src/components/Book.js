import React , {useState} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
const Book = () => {
    // const [firstname,setFirstName]=useState('');
    // const[lastname,setLastName]=useState('');
    // const[checkin, setCheckIn]= useState('');
    // const[checkout, setCheckOut]= useState('');
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        checkin:new Date(),
        checkout:new Date()
    });

    const {firstname,lastname,checkin,checkout} = formData;

    const onChange2 = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        console.log(formData);
    }
    const onSubmit2 = async (e) => {
        e.preventDefault();
    
        let token = localStorage.getItem('token');
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token':token
                 
            },
        };
        let data = {
            firstname:firstname,
            lastname:lastname,
            checkin:checkin,
            checkout:checkout
        }
        try{
console.log(data.checkin);
console.log(data.checkout);

            const response = await axios.post('http://localhost:5000/api/rooms',data,config);
            localStorage.setItem('token',response.data.token);
            console.log(response);
            let decodeduser = decode(response.data.token);
            console.log(decodeduser);
        }
        catch(e){
            console.log("error", e);
        }
    }

    return(
        <div>
            <h1>Sign up</h1>
            <p>Create an account</p>
            <form onSubmit={onSubmit2}>
                <div>
                    <input type="text" placeholder="First Name" name="firstname"
                    onChange={onChange2}
                    required />
                </div>
                <div>
                    <input type="text" placeholder="Last Name" name="lastname" 
                    onChange={onChange2}
                    required />
                </div>
                <div>
                    <input type="date" placeholder="Checkin" name="checkin"  
                    onChange={onChange2}
                    required />
                </div>

                <div>
                    <input type="date" placeholder="Checkout" name="checkout" 
                    onChange={onChange2}
                    required />
                </div>

                <input type='submit' value='Book' />
            </form>
            
        </div>
    )
}
export default Book;