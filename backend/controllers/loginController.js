import bcrypt from "bcrypt";
import setCookies from "../helpers/cookieHelper.js";
import Users from "../models/user.js";

const logInController = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username && password) {
            const user = await Users.findOne({ username });
            const isPasswordValid = await bcrypt.compare(password, user?.password || "");
            if (user && isPasswordValid) {
                await setCookies(user._id, res);
                res.status(200).send({
                    user: {
                        name: user.name,
                        username: user.username,
                        gender: user.gender,
                        profilepic: user.profilepic
                    }
                });
            } else {
                res.status(400).send({
                    isError: true,
                    error: 'Invalid Credentials, Plese enter correct username or password'
                })
            }
        } else {
            res.status(400).send({
                isError: true,
                error: "Invalid Credentails, Please enter all required fields",
            });
        }
    } catch (e) {
        res.status(500).send({ isError: true, error: "Error occured in login controller" });
    }
};

export default logInController;
