

const delete_reservation = (req, res) => {
    const q = "DELETE * from reservations WHERE code = ?"
    code = req.body.body.code;
    console.log(code);
    db.query(q, code, (err, data) => {

    })
}