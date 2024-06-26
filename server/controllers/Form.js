const Form = require("../models/ProductForm")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
// Function to create a new course
exports.createProduct = async (req, res) => {
    try {
        // Get user ID from request object
        const userId = req.user.id

        // Get all required fields from request bodys
        let {
            ProductName,
            ProductDescription,
            price,
            tag,
            ProductCondition,
            BuyDate

        } = req.body
        // Get thumbnail image from request files
        const ProductImage = req.files.ProductImage

        // Check if any of the required fields are missing
        if (
            !ProductName ||
            !ProductDescription ||
            !whatYouWillLearn ||
            !price ||
            !tag ||
            !ProductImage ||
            !ProductCondition ||
            !BuyDate

        ) {
            return res.status(400).json({
                success: false,
                message: "All Fields are Mandatory",
            })
        }

        // Upload the Thumbnail to Cloudinary
        const Image = await uploadImageToCloudinary(
            ProductImage,
            process.env.FOLDER_NAME
        )
        console.log(Image)
        // Create a new course with the given details
        const newProduct = await Form.create({
            ProductName,
            ProductDescription,
            price,
            tag,
            ProductCondition,
            BuyDate,
            ProductImage: Image.secure_url,
        })

        // Add the new course to the User Schema of the Instructor
        await User.findByIdAndUpdate(
            {
                _id: userId,
            },
            {
                $push: {
                    Products: newProduct._id,
                },
            },
            { new: true }
        )
        res.status(200).json({
            success: true,
            data: newCourse,
            message: "Course Created Successfully",
        })
    } catch (error) {
        // Handle any errors that occur during the creation of the course
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Failed to create course",
            error: error.message,
        })
    }
}
