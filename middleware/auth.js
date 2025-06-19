import dotenv from 'dotenv';
dotenv.config();

export const authenticate = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid API key' });
  }
  next();
};
