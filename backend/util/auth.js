const { verify } = require("jsonwebtoken");
require("dotenv").config();
const { NotAuthError } = require("./error");

const key = process.env.SecretPassword;

function validateJSONToken(token) {
  const value = verify(token, key);
  return value;
}

function checkAuthMiddleware(req, res, next) {
  if (!req.headers.authorization) {
    console.log("NOT AUTH. AUTH HEADER MISSING.");
    return next(new NotAuthError("Not authenticated."));
  }

  const authFragments = req.headers.authorization.split(" ");

  if (authFragments.length != 2) {
    console.log("NOT AUTH. AUTH HEADER MISSING.");
    return next(new NotAuthError("Not authenticated."));
  }

  const authToken = authFragments[1];

  try {
    const validatedToken = validateJSONToken(authToken);
    req.token = validatedToken;
  } catch (error) {
    return next(new NotAuthError("Not authenticated."));
  }

  next();
}

exports.checkAuth = checkAuthMiddleware;
