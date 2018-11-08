const User = require('../models/user');

exports.getUsers = (req, res) => {
    User.find()
        .exec()
        .then(users => {
            let result = users.map(user => {
                return {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    location: user.location,
                    role: user.role,
                    imgSrc: user.imgSrc
                }
            });
            res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};