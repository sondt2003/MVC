const userModel = require('../models/user.model');
const bcrypt = require('bcrypt'); 
const crypto = require('crypto'); 
class loginService {
    static signup = async ({ username, email, password, id_role }) => {
        try {
            const user = await userModel.findOne({ email: email }).lean();
            console.log("email: " + user);
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
                password:passwordHash,
                id_role
            })
            if(newUser){
                const {privateKey,publicKey}=crypto.generateKeyPairSync('rsa',{
                    modulusLength:4096
                })
                console.log(privateKey,publicKey);
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