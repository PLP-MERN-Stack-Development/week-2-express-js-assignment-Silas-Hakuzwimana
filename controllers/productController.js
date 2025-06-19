import Product from "../models/Product.js";
import { NotFoundError} from "../utils/error.js";

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category } = req.query;
    const filter = category ? { category } : {};

    const products = await Product.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / limit);

    res.setHeader("X-Total-Count", totalProducts);
    res.setHeader("X-Total-Pages", totalPages);
    res.setHeader("X-Current-Page", page);
    res.setHeader("X-Page-Size", limit);
    res.setHeader("X-Last-Page", products.length < limit);

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json({
      total: totalProducts,
      page: Number(page),
      limit: Number(limit),
      products
    });

  } catch (err) {
    next(err);
  }
};

// Get a product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new NotFoundError("Product not found");
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

//Search a product
export const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    const products = await Product.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
