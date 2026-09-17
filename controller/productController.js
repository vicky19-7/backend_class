import productModel from '../model/productModel.js'
import userModel from '../model/userModel.js'
import cloudinary from '../config/cloudinary.js'
/**
 * CRUD
 * Create : upload product
 * Get all :
 * Get one :
 * Upload : update product (stock)
 * delete
 */

//create / upload

/*const uploadProduct = async (req,rsp) => {
    try{
        const getUserID = await userModel.findById(req.params.userId)
        const { name, description, price, category, stock, quality, image } = req.body

        if (!userId){
            return res.status(404).json({
                message: "User not found"
            })
        }

        if (!req.file){
            return res.status(400).json({
                message: "Image is required...please upload an image"
            })
        }

        const result = await cloudinary.uploader.upload(req.file.path)
        const imageUrl = result.secure_url

        const product = await productModel.create(
            { 
                name, description, price, category, stock, quality, image: imageUrl
            })

        await getUserID.products.push(product._id)
        await getUserID.save()

        return res.status(201).json(
            { message: 'Product uploaded successfully', product
            });
    }catch(error) {
        res.status(500).json({ message: error.message })
    };
} */

    const uploadProduct = async (req, res) => {
    try {
        const getUserID = await userModel.findById(req.params.userId);

        const {
            name,
            description,
            price,
            category,
            stock,
            quantity
        } = req.body;

        if (!getUserID) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (!req.file) {
            return res.status(400).json({
                message: "Image is required...please upload an image"
            });
        }

        const result = await cloudinary.uploader.upload(req.file.path);

        const imageUrl = result.secure_url;

        const product = await productModel.create({
            name,
            description,
            price,
            category,
            stock,
            quantity,
            image: imageUrl
        });

        getUserID.products.push(product._id);

        await getUserID.save();

        return res.status(201).json({
            message: "Product uploaded successfully",
            product
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

//get all products

const getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await productModel.find();
    return res.status(200).json({
      message: "All product fetched successfully", getAllProducts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message })
    }
};

export {
  uploadProduct,
  getAllProducts
};
