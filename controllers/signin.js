const bcrypt = require('bcrypt');
const users = require('./schemas/userSchema');

function signin(req, res) {
    let { emailProvided, password } = req.body;

    users.findOne({ email: emailProvided }, (err, doc) => {
        if (err) {
            res.send({ success: false, reason: "An error occured with the database" });
        }
        else if (!doc) {
            res.send({ success: false, reason: "Invalid Email Provided" });
        }
        else {
            bcrypt.compare(password, doc.password, (err, same) => {
                if (err) {
                    res.send({ success: false, reason: "An error occured with bcrypt" });
                }
                else if (!same) {
                    res.send({ success: false, reason: "Invalid Password Provided" });
                }
                else {
                    //jwt here
                    res.send({ success: true });
                }
            });
        }
    });
}

module.exports = signin;