export const validateProduct = (req, res, next) => {
  const { title, description, price, category, inStock } = req.body;
  
  if (
    typeof title !== 'string' || title.trim() === '' ||
    typeof description !== 'string' || description.trim() === '' ||
    typeof price !== 'number' || price <= 0 ||
    typeof category !== 'string' || category.trim() === '' ||
    typeof inStock !== 'boolean'
  ) {
    return res.status(400).json({ message: 'Validation Error: Invalid product data' });
  }

  next();
};
