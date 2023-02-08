import {db} from "../connect.js"
export const home = (req, res) => {
    const q = "SELECT * FROM events";
    db.query(q, (err, events) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(events);
    })
    
    // CREATE new event 
    // let finish = new Date();
    // let start = new Date();
    // finish.setDate(finish.getDate() + 4);
    // const values = [
    //     'Test2',
    //     start,
    //     finish 
    // ]
    // const q2 = "INSERT INTO events (title, createdAt, finishDate) VALUES (?)";
    // db.query(q2, [values], (err, data) => {
    //     if (err) return res.status(500).json(err);
    //     return res.status(200).json("new reservation");
    // })
    
}

export const get_reservation = (req , respond) =>
{
    const q = "SELECT * from events WHERE title = ?"
    const name = req.body.body.var; 
    db.query(q, name, (err, res) => {
        if (err) console.log(err);
        const id = res[0].id;
        const code = Math.floor(Math.random() * 1000);
        const values = [
            code,
            id
        ];
        console.log(id);
        const q2 = "INSERT INTO reservations (code, event_id) VALUES (?, ?)"
        db.query(q2, values, (err, res) => {
            if (err) console.log(err);
            else respond.status(200).send("Your code is: " + code);
        })

    })
}