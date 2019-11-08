const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//bring in the router express object
const router = express.Router();

// User Model
const Client = require('../../models/Client');

// @route  POST api/auth
// @desc   Auth user
// @access Public 
router.post('/', (req, res) => {
    const { email, password } = req.body;
    const jwtSecret = require('../../config/config.js').jwtSecret;

    //simple validation
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }


    //Check for existing user
    Client.findOne({ email: email })
        .then(user => {

            //if there is a user with that email
            if(!user) {
                return res.status(400).json({ msg: 'user does not exist' });
            }

            // validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'invalid credentials' })

                    jwt.sign(
                        { id: user.id },
                        jwtSecret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    )
                })

         
            
        })
});

// @route  GET api/auth/user
// @desc   GET user data
// @access private
router.get('/user', auth, (req, res) => {
    Client.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
}); 

module.exports = router;