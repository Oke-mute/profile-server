const bcrypt = require('bcrypt');
const users = require('./schemas/userSchema');

function signup(req, res) {
    let { f_name, l_name, email, password } = req.body;

    bcrypt.hash(password, 5).then((hash) => {
        let newUser = new users({
            f_name: f_name,
            l_name: l_name,
            email: email,
            password: hash
        });

        newUser.save().then(() => {
            //jwt here
            res.send({ success: true });
        }).catch((e) => {
            res.send({ success: false, reason: "An error occured" });
        });
    }).catch(e => {
        res.send({ success: false, reason: "An error occured" });
    });
}

module.exports = signup;