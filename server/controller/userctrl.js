const { generateToken } = require('../config/jwtToken');
const User = require('../models/usermodel');
const Payee = require('../models/payeemodel')
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodbId');
const { generateRefreshToken } = require("../config/refreshtoken");
const jwt = require("jsonwebtoken");

// const createPayee = asyncHandler(async (req, res) => {

//     try {
//         const newPayee = await Payee.create(req.body);
//         res.json(newPayee);

//     } catch (error) {
//         throw new Error(error)
//     }

// });



// create user
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        // create a new User
        let data = req.body;


        data.document = "logo.jpeg";

        console.log(data)
        const newUser = await User.create(data);
        res.json(newUser);
    } else {
        throw new Error("User already exist")
    }
});

// login user
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateuser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,

            },
            {
                new: true
            }
        );
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            Path: "/",
            // secure: true,  
            maxAge: 72 * 60 * 60 * 1000,

        });
        res.json({
            _id: findUser?._id,
            name: findUser?.name,
            email: findUser?.email,
            mobile: findUser?.mobile,
            organization: findUser?.organization,
            address: findUser?.address,
            role: findUser?.role,
            isBlocked: findUser?.isBlocked,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error("Invalid Credentials");
    }

});
// handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error(" No Refresh token present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("There is something wrong with refresh token");
        }
        const accessToken = generateToken(user?._id);
        res.json({ accessToken });
    });
});

// logout functionality

const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            // secure: true,
        });
        return res.sendStatus(204); // forbidden
    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204); // forbidden
});

// update user
const updatedUser = asyncHandler(async (req, res) => {
    console.log();
    const { _id } = req.body;
    validateMongoDbId(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
                // name: req?.body?.name,
                // email: req?.body?.email,
                mobile: req?.body?.mobile,
                organization: req?.body?.organization,
                password: req?.body?.password,
            },
            {
                new: true,
            },

        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error)
    }
});


// update orgnization 

// const updateOrgnization = asyncHandler(async (req, res) => {
//     console.log();
//     const { _id } = req.user;
//     validateMongoDbId(_id);
//     try {
//         const updatedUser = await User.findByIdAndUpdate(
//             _id,
//             {
//                 orgnization: req?.body?.orgnization,

//             },
//             {
//                 new: true,
//             }

//         );
//         res.json(updatedUser);
//     } catch (error) {
//         throw new Error(error)
//     }
// });


// Get all users

const getallUser = asyncHandler(async (req, res,) => {

    try {
        const getUser = await User.find();
        res.json(getUser);
    } catch (error) {
        throw new Error(error)
    }
});

// Get a single user

const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaUser = await User.findById(id);
        res.json(getaUser);
    } catch (error) {
        throw new Error(error)
    }
});

// Delete a user

const deleteaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json(deleteaUser);
    } catch (error) {
        throw new Error(error)
    }
});


//block user

const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const block = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        );
        res.json({
            message: "User blocked"
        });
    } catch (error) {
        throw new Error(error);
    }
});
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const unblock = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            {
                new: true,
            }
        );
        res.json({
            message: "User unblocked"
        });
    } catch (error) {
        throw new Error(error);
    }
});

const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.body;
    const { password } = req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    } else {
        res.json(user);
    }
});


module.exports = {
    createUser,
    loginUserCtrl,
    getallUser,
    getaUser,
    deleteaUser,
    updatedUser,
    blockUser,
    unblockUser,
    logout,
    handleRefreshToken,
    // updateOrgnization,
    updatePassword,

};