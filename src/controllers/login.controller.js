const loginService = require("../services/login.service");

class LoginController {
    signUp = async (req, res, next) => {
        try {
            console.log('Sign Up:' + JSON.stringify(req.body));
            return res.status(201).json(await loginService.signup(req.body))
        } catch (error) {

        }
    }
}
module.exports = new LoginController;