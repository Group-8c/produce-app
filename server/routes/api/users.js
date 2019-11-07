/*
    This file will hold the rest api route information for clients.
*/

const express = require('express');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const router = express.Router();

const Client = require('../../models/Client');

// @route  POST api/users
// @desc   Register new user
// @access Public 
router.post('/', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    //Check for required information
    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    //Check for existing user
    Client.findOne({ email: email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exists' });
        })
        const newClient = new Client({
            firstName,
            lastName,
            email,
            password
        });

        //Create salt and hash (protect user password - don't save it as plaintext)
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newClient.password, salt, (err, hash) => {
                if (err) throw err;
                newClient.password = hash;
                newClient.save()
                    .then(user => {
                        jwt.sign(
                            { id: user.id },

                            
                            /*
                                this may not work, we may have to install the config package
                                and do "config.get('jwtSecret')"
                            */
                            require('../../config/config').jwtSecret,

                            //expires in 1 hour
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
        })
});

module.exports = router;