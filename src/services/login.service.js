const userModel = require('../models/user.model');
const bcrypt = require('bcrypt')
    ; class loginService {
    static signup = async ({ username, email, password, id_role }) => {
        try {
            const user = userModel.findOne({ email: email }).lean();
            if (user) {
                return {
                    code: 'xxxx',
                    message: 'already exists',
                }
            }
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = userModel.create({
                username,
                email,
                passwordHash,
                id_role
            })
            if(newUser){

            }
        } catch (error) {
            return {
                code: 'xxx',
                message: error,
                status: 'error',
            }
        }
    }
}
module.exports = loginService;