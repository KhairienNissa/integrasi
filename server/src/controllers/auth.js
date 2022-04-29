// import model
const { user } = require("../../models");

// import joi validation
const Joi = require("joi");

// import package here
const bcrypt = require('bcrypt')

const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
  // our validation schema here
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(6).required(),
  });

  // do validation and get error object from schema.validate
  const { error } = schema.validate(req.body);

  // if error exist send validation error message
  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });
    
    const userCheck = await user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "idUser"],
      },
    })

    if(userCheck != null){
      return res.status(500).send({
        status: 'failed',
        message: 'Email sudah di gunakan'
      })
    }
  try {
    // code here
    // if (newUser.email > 0) {
    //   return res.status(400).send({
    //     status: 'failed',
    //     message: 'Email sudah digunakan'
    //   })
    // }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = await user.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      status : "customer"
    });

 

    const token = jwt.sign({id: newUser.id}, process.env.SECRET_KEY)


    res.status(200).send({
      status: "success...",
      data: {
        name: newUser.name,
        email: newUser.email,

        token
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.login = async (req, res) => {
  // our validation schema here
  const schema = Joi.object({
    email: Joi.string().email().min(6).required(),
    password: Joi.string().min(2).required(),
  });

  // do validation and get error object from schema.validate
  const { error } = schema.validate(req.body);

  // if error exist send validation error message
  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });

  try {
    const userExist = await user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    // code here

    if (!userExist) {
      return res.status(400).send({
        status: 'failed',
        message: 'Email or password not match'
      })
    }


    const isValid = await bcrypt.compare(req.body.password, userExist.password)

    if(!isValid) {
      return res.status(400).send({
        status: 'failed',
        message: "Email or password not match"
      })
    }
   
    const token = jwt.sign({ id: userExist.id}, process.env.SECRET_KEY)

    res.status(200).send({
      status: "success...",
      data: {
        name: userExist.name,
        email: userExist.email,
        status: userExist.status,

        token
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.checkAuth = async (req, res) => {
  try {
    const id = req.user.id;

    const dataUser = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(404).send({
        status: "failed",
      });
    }

    res.send({
      status: "success...",
      data: {
        user: {
          id: dataUser.id,
          name: dataUser.name,
          email: dataUser.email,
          status: dataUser.status,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};