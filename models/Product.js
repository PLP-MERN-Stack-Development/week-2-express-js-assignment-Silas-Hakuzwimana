import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    inStock:{
        type: Boolean,
        default: true
    }
});

export default mongoose.model("Product", productSchema);
