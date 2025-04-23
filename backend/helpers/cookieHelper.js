import jwt from "jsonwebtoken";
import Users from "../models/user.js";

const setCookies = async (userID, res) => {
    const user = await Users.findOne({ _id: userID });
    const jwtToken = jwt.sign({
        name: user.name,
        username: user.username,
        gender: user.gender
    }, process.env.TOKEN_KEY, { expiresIn: '15hr' });
    res.cookie('token', jwtToken, { maxAge: 15 * 60 * 60 * 1000, secure: false, httpOnly: true });
};

export default setCookies;