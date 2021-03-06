  
/*
    This file contains some code that was borrowed from Traversy Media MERN Tutorial and adapted to this project. There is a link to tutorial
    in the readme.
*/

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
    const jwtSecret = process.env.JWT_SECRET || require('../../config/config.js').jwtSecret;

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
                                    isAdmin: user.isAdmin,
                                    email: user.email,
                                    firstName: user.firstName,
                                    lastName: user.lastName
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


// @route  GET api/auth/users
// @desc   GET all users (not passwords)
// @access private
router.get('/users', (req, res) => {
    
    Client.find().select('-password').then(users => res.json(users));
    
});

module.exports = router;
