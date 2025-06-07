const User = require('../Models/user.model');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

function generateToken(user) {
  return jwt.sign(
    { id: user._id, role: user.role, name: user.name, email: user.email },
    SECRET,
    { expiresIn: '7d' }
  );
}

async function registerUser(userData) {
    const { name, email, password } = userData
    const existing = await User.findOne({ email });
  if (existing) throw new Error('User already exists');

  const user = new User({ name, email, password });
  await user.save();
  return user;
}

async function loginUser(userData) {
    const { email, password } = userData
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return '';
    }
    
    return {token: generateToken(user)};
}

async function currentUser(userData) {
  var user = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    role: userData.role
}
return user;
}
  
module.exports = {
  registerUser,
  currentUser,
  loginUser
}