module.exports = {
    successResponseWithoutData : (res, msg) => {
        let data = {
            status: 1,
		    message: msg
        }
        return res.status(200).json(data);
    },
    successResponseWithData : (res, msg, data) => {
        let resData = {
            status: 1,
            message: msg,
            data: data
        };
        return res.status(200).json(resData);
    },
    ErrorResponse: (res, msg) => {
        let data = {
            status: 0,
            message: msg,
        };
        return res.status(500).json(data);
    },
    notFoundResponse: (res, msg) => {
        let data = {
            status: 0,
            message: msg,
        };
        return res.status(404).json(data);
    },
    validationErrorWithData: (res, msg, data) => {
        let resData = {
            status: 0,
            message: msg,
            data: data
        };
        return res.status(400).json(resData); 
    },
    unauthorizedResponse: (res, msg) => {
        let data = {
            status: 0,
            message: msg,
        };
        return res.status(401).json(data);
    }
}