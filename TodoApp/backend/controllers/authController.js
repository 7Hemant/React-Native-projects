const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const user = require("../modules/AuthSchema");
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  // secure password
  const salt = await bcrypt.genSalt(10);
  const hashpassword = bcrypt.hashSync(password, salt);
  //create user
  const registerUser = await user.create({
    email,
    password: hashpassword,
  });
  res.status(200).json({
    status: "success",
    token: generateToken(registerUser._id),
  });
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const User = await user.findOne({ email });
  if (User && (await bcrypt.compare(password, User.password))) {
    res.json({
      token: generateToken(User._id),
    });
  }
};

const generateToken = (_id) => {
  return JWT.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "15d" });
};
