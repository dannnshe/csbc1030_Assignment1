const jwt = require('jsonwebtoken');

const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization;
    
    // Check if token is present
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        // Handle invalid token
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};

module.exports = authenticateUser;
