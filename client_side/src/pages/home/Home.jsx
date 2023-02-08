import React, {useState, useEffect} from "react"
import axios from "axios"
import Event from "../../components/Event"
const Home = () => {
    const [res, setRes] = useState(null);
    const [res2, setRes2] = useState(null);
        useEffect(() => {
             axios.get("http://localhost:8800/api/").then(res => setRes(res.data))
             .catch(error => console.error(error));
        }, []); 
        const handleReservation = async(e) => {
            e.preventDefault()
            console.log(e.target.name);
            try{
                await axios.post("http://localhost:8800/api/", {
                    body: {
                        var: e.target.name
                    }
                }).then(res2 => setRes2(res2.data));
            }catch(error)
            {
                console.log(error);
            } 
        }
    return (
        <div>
            <h1>Here is a list with availaible events: </h1>
                {res? 
                <ul>
                <li>
                <Event title = {JSON.stringify(res[0].title)} sdate = {JSON.stringify(res[0].createdAt)} fdate = {JSON.stringify(res[0].finishDate)}  />
                <button name = {res[0].title} onClick = {handleReservation} type = "submit">Reserve your place</button>
                </li>
                <li>
                <Event title = {JSON.stringify(res[1].title)} sdate = {JSON.stringify(res[1].createdAt)} fdate = {JSON.stringify(res[1].finishDate)}  />
                <button type = "submit" onClick = {handleReservation} name = {res[1].title}>Reserve your place</button>
                </li>
                </ul>
                : <p>Loading...</p>}
                {res2? 
                <p> {JSON.stringify(res2)}</p>
                : <p></p>}
        </div>
    )
}
export default Home;