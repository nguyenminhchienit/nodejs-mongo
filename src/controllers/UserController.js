const UserModel = require('../models/UserModel')

const handleRegister = async (req, res) => {
    console.log("Handle register");
    console.log("Check user: ", req.body)
    try {
        const { username, email, password } = req.body;

        await UserModel.create({
            username: "test",
            email: "test",
            password: "test",
            role: 'customer'
        })

        return res.status(200).json({
            message: 'OK'
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    handleRegister
}