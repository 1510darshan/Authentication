const { default: mongoose } = require('mongoose');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const generateTokenAndSetCookie =  require('../utils/generateTokenAndSetCookie');
const senderVerificationEmail = require('../mailtrap/emails')


const signup = async (req, res) => {
    try {
        let { email, password, name } = req.body;

        // Check if all fields are provided
        if (!email || !password || !name) {
            throw new Error("All fields are required");
        }

        // Check if the user already exists
        const alreadyExists = await User.findOne({ email });
        if (alreadyExists) {
            return res.status(400).json({ success: false, message: "User Already Exists" });
        }

        // Await the hashing of the password
        const hashPassword = await bcrypt.hash(password, 10);  // Fix: Await the promise

        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        // Create new user
        const user = new User({
            email,
            password: hashPassword,  // Fix: Store resolved password
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        });

        // Save the user to the database
        await user.save();

        // Generate token and set cookie
        generateTokenAndSetCookie(res, user._id);

        await senderVerificationEmail(user.email,  verificationToken);

        // Respond with success
        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user: {
                ...user._doc,
                password: undefined,  // Exclude password from the response
            }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const signin = async (req, res) => {
    try {
        res.send("SignIn Router");
    } catch (error) {
        console.log(error);
    }
}

const logout = async (req, res) => {
    try {
        res.send("logout Router");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    signup,
    signin,
    logout
}