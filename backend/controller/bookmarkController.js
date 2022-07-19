const Booki = require('../models/bookmark');

const path = require('path');
const { sendHttpRespnce } = require('../utils/httpResponce');
const sendJwtToken = require('../utils/sendJwt');
const { errorHandler } = require('../utils/errorHandler');

exports.createBooki = (req, res) => {
	try {
		console.log(req.body);
		Booki.create(req.body)
			.then((result) => {
				sendHttpRespnce(200, true, 'added successfully', res);
			})
			.catch((err) => errorHandler(err));
	} catch (error) {
		errorHandler(error,res);
	}
};

exports.getAll = (req,res)=>{
    try
    {
        Booki.find().then(reso=> {
           return res.status(200).json({
                success:true,
                bookmark:reso
            })
        }).catch(err=>errorHandler(err,res))
    }
    catch(err)
    {

    }
}


exports.deleteBooki = (req,res)=>{
    try
    {
        const {id} = req.params

        Booki.findByIdAndDelete(id).then(res=> {
           return sendHttpRespnce(200,true,"deleted Successfully",res)
        }).catch(err=>errorHandler(err,res))
    }
    catch(err)
    {
        errorHandler(err,res)
    }
}


