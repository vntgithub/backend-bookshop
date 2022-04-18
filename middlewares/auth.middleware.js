const jwt = require('jsonwebtoken');


const checkToken = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		if (!token) return res.status(401).send('Unauthorized')
		jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
			if (payload) {
				req.user = payload;
				next();
			} else {
				res.status(401).send('Unauthorized');
			}
		})
	} catch (err) {
		res.status(401).send('No token provided');
	}
}
const protectedRoute = (req, res, next) => {
	if (req.user) {
		return next();
	}
	res.status(401).send('Unauthorized');
}
const authMiddleware = { checkToken, protectedRoute }
module.exports = authMiddleware;