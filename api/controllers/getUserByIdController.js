const User = require('../models/user');

exports.getUser = (req, res) => {
    User.findOne({ _id: req.params.id})
        .exec()
        .then(user => {
           console.log('getUser is running ', req.params)
                let u =  {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    location: user.location,
                    role: user.role,
                    imgSrc: user.imgSrc
                }
            
            res.status(200).json(u);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
};