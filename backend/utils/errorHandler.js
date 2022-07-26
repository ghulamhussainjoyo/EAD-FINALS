//handle email or usename duplicates
const handleDuplicateKeyError = (err, res) => {
	const field = Object.keys(err.keyValue);
	const code = 409;
	const error = ` this property ${field} already exists.`;
	res.status(code).send({ succes: false, messages: error, fields: field });
};

function errorHandler(err, res) {
	console.log(err)
	try {
		if (err.code && err.code == 11000) return (err = handleDuplicateKeyError(err, res));
	} catch (error) {
		res.status(500).send('An error accured');
	}
}

module.exports = { errorHandler };

// module.exports = (err, req, res, next) => {
//     try {
//         console.log('congrats you hit the error middleware');
//         if(err.name === 'ValidationError') return err = handleValidationError(err, res);

//     } catch(err) {
//         res.status(500).send('An unknown error occured.');
//     }
// }
