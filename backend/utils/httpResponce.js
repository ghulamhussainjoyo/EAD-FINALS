
function sendHttpRespnce(statusCode,success,message,res)
{
    res.status(statusCode).json({
        success,
        message
    })
}

module.exports = {sendHttpRespnce}