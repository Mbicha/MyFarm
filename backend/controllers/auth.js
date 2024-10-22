const user = require("../models/user");
const jwt = require("jsonwebtoken");

const JWT_TOKEN = "my-farm-admin-portal-JWT_TOKEN"

const signToken = id => {
    return jwt.sign({ id }, JWT_TOKEN, {
        expiresIn: '1d'
    });
};

exports.register = async(req, res) => {
    try {
        const newUser = await user.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            confirm_password: req.body.confirm_password
        })

        const jwt_token = signToken(newUser._id)

        res.status(201).json({
            status: 'success',
            jwt_token,
            data: {
                user: newUser
            }
        })

    } catch (error) {
        console.log(error);
        
        res.status(404).send({ error:error });
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password){
        res.status(400).send({error: "Provide Email or Password"})
    }

    const existing_user = await user.findOne({email}).select("+password");

    if (!existing_user || !(await existing_user.correctPassword(password, existing_user.password))) {
        res.status(401).send({error: "Incorrect Email or Password"})
    }

    let token = "";
    if(existing_user) {
        token = signToken(existing_user._id);
    }

    res.status(200).send({
        status: "success",
        existing_user,
        token
    })
}
