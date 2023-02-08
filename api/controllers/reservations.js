import {db} from "../connect.js"


export const delete_reservation = (req, res) => {
    const q = "DELETE from reservations WHERE code = ?"
    let code = req.body.body.code;
    code = parseInt(code);
    const q2 = "SELECT * FROM reservations WHERE code = ?"
    db.query(q2, code, (err, data) => {
        if (err) res.status(500).json(err);
        const ev_id = data[0].event_id;
        const q3 = "SELECT * FROM events WHERE id = ?"
        const ourDate = new Date();
        if (!data[0]) res.status(200).send("No code found");

        else db.query(q3, ev_id,  (err, data) => {
            if (err) console.log(err);
            const dif = (data[0].createdAt - ourDate) / 1000 / 60 / 60 / 48;
            const dif2 = (data[0].finishDate - data[0].createdAt) / 1000 / 60 / 60 / 48;
            console.log(dif2);
            if (dif >= 2 && dif2 <= 2)
            {
                db.query(q, code, (err, data) => {
                    if (err) console.log(err);
                    res.send("deleted");
                    
                })
            }
        })
 
        })
    
    
}
