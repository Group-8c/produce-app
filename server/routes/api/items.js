/*
    This file will hold the rest api route information for items.
*/

const express = require('express');
const auth = require('../../middleware/auth');
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
        price: req.body.price,
        image: req.body.image
    })

    newItem.save()
        .then(item => res.json(item))
})

// @route  DELETE api/items/:id
// @desc   Delete an item
// @access Private 
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        //catch error if an id doesnt exist. send a {success: false} object with a 404 error code
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;