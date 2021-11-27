const UserModel = require("../models/user");
const { validationResult } = require('express-validator');
const apiResponse = require('../utils/apiResponse')
const bcrypt = require("bcrypt");

module.exports = {
    signup: async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return apiResponse.validationErrorWithData(res, "validation errror", errors.array());
            }
            const salt = await bcrypt.genSalt(10);
            let hash = bcrypt.hashSync(req.body.password, salt);
            let user = new UserModel({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hash,
                }
            );
            console.log('>>>>', user);
            user.save(function (err) {
                console.log(err);
                if (err) { return apiResponse.ErrorResponse(res, err); }
                let userData = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                };
                return apiResponse.successResponseWithData(res,"Registration Success.", userData);
            });
        } catch (err) {
            console.log('err', err)
            return apiResponse.ErrorResponse(res, err);
        }
    },
    login: async (req, res, next) => {
        
    }
}