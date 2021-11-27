const { check } = require('express-validator')

exports.validate = (method) => {
    switch (method) {
        case 'signup':
            return [ 
                check('firstName').not().isEmpty().withMessage('First Name is required'),
                check('lastName').not().isEmpty().withMessage('Last Name is required'),
                check('email', 'Email is required').isEmail(),
                check('password').not().isEmpty().withMessage('password is required'),
            ] 
        break; 
        case "login" :
            return [ 
                check('username').not().isEmpty().withMessage('Username is required'),
                check('password').not().isEmpty().withMessage('Password is required')
            ]
        break;
    }
}