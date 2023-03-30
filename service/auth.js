// const sessionIdToUserMap = new Map();

const jwt = require("jsonwebtoken");
const secret = "Ravindra$1234";



async function setUser(user) {
  return await jwt.sign({
    _id: user._id,
    email: user.email
  }, secret
  );
}

async function getUser(token) {
  if (!token) return null;
  try {
    const decoded = await jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    // Handle error
    console.error(err);
    return null;
  }
}

module.exports = {
  setUser,
  getUser
};




