import React, {useState} from "react"
import axios from "axios"
const Reservation = () => {
    const [res, setRes] = useState(null);
    const [code, setCode] = useState(null);

    const handleChange = async(e) => {
        console.log(e.target.value);
        setCode(e.target.value);
    }
    const deleteReservation = async(e) => {
        e.preventDefault();
        console.log(e.target.name);
        try{
            await axios.post("http://localhost:8800/api/reservations", {
                body: {
                    code: code
                }
            }).then(res => setRes(res.data));
        }catch(error)
        {
            console.log(error);
        } 
    }
    return (
        <div>
        <h2>Enter your code below to delete your reservation </h2>
        <form>
            <input onChange = {handleChange}  type = "number"></input>
            <button onClick = {deleteReservation} name = "button" type = "submit">Delete your reservation</button>
            {res ? <p>{JSON.stringify(res)}</p> : <p></p>}
        </form>
        </div>
    )
}

export default Reservation;
