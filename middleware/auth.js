import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  // Get token from Authorization header
  const token = req.headers['authorization']?.split(' ')[1];

  // If there's no token, send unauthorized error
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach decoded user data to the request object
    next();  // Proceed to the next middleware or handler
  } catch (err) {
    // If the token is invalid, send an error
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
