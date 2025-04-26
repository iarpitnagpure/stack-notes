import jwt from "jsonwebtoken";

const authenticationMiddleware = (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        try {
            const tokenInfo = jwt.verify(token, process.env.TOKEN_KEY);
            req.username = tokenInfo.username;
            next();
        } catch (e) {
            res.status(400).send({ isError: true, error: 'Error in auth middleware' });
        }
    } else {
        res.status(400).send({ isError: true, error: 'You are not authorize' });
    }
};

export default authenticationMiddleware;
