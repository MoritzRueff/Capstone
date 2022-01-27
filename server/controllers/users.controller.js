import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    alert("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.username,
      email: user.userMail,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    alert("Error occured");
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    console.log("Invalid Email or Password !");
  }
};

/* following maybe useless */

const getUser = async (req, res) => {
  const userId = req.params.userId;
  const foundUser = await User.findById(userId);
  res.json(foundUser);
};

const updateUser = async (req, res) => {
  const userId = req.params.userId;

  const userData = {
    name: req.body.username,
    email: req.body.userMail,
    password: req.body.password,
  };

  const result = await User.findByIdAndUpdate(userId, userData, {
    returnDocument: "after",
  });

  res.json(result);
};

const deleteUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const result = await User.findByIdAndDelete(userId);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export { deleteUser, authUser, getUser, registerUser, updateUser };
