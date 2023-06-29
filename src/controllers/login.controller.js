class LoginController {
    signUp = async (req, res, next) => {
        try {
            console.log('Sign Up:'+req.body);
            return res.status(201).json({
                code:201,
                metadata:{
                    userid:1
                }
            })
        } catch (error) {
            
        }
    }
}
module.exports = new LoginController;