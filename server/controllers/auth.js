const bcrypt = require("bcrypt");

const User = require("../models/user");

exports.register = async (req, res) => {
    const { name, email, phone_num, password } = req.body;
    try {
        const userDoc = await User.findOne({ email });
        if(userDoc) {
            throw new Error("Email has already existed.");
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            await User.create({
                name,
                email,
                phone_num,
                password: hashedPassword                
            })
            return res.status(201).json({
                success: true,
                message: "User registration completed."
            })
        }
    } catch (error) {
        return res.status(422).json({
            success: false,
            message: error.message
        });
    }

}