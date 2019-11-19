/*
    This file will hold the rest api route information for items.
*/

const express = require('express');

//bring in the router express object
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   GET all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => {
            console.log(err)
            res.status(400).json({ msg: "" })
        })
})

// @route  POST api/items
// @desc   Add item
// @access private
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        price: req.body.price
    })

    newItem.save()
        .then(item => res.json(item))
})

module.exports = router;