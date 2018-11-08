const db = require('mongoose');
const User = require('../models/user');

exports.createUser = (req, res) => {

    let user = new User({
        _id: new db.Types.ObjectId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        location: req.body.location,
        role: req.body.role,
        imgSrc: req.body.imgSrc
    });

    user.save()
        .then(() => res.status(200).json({ message: `User ${req.body.firstName} ${req.body.lastName} was successfully created` }))
        .catch(err => res.status(500).json({ message: 'An error has occured', error: err }));
};