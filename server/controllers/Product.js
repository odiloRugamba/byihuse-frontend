import Product from '../repos/Product';
import Category from '../repos/Category';
import Response from '../utils/Responses';

exports.create = async (req, res) =>{
    try{
        const {
            name,
            description,
            category,
            department,
            company,
            price,
            isMadeInRwanda,
            pictures
        } = req.body;
        const results = await Product.create(name, description, category, department, company, price, isMadeInRwanda, pictures);
        await Category.addProduct(category, results._id);
        Response.Success(res, 200, "Created successfully", results);
    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};

exports.update = async (req, res) =>{
    try{
        const {name, description, company, price, isMadeInRwanda} = req.body;
        const {productId} = req.params;
        const results = await Product.update(productId, name, description, company, price, isMadeInRwanda);
        Response.Success(res, 200, "Updated successfully", results);

    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};


exports.getProductDetails = async (req, res) =>{
    try{
        const {productId} = req.params;
        const results = await Product.getProductDetails(productId);
        Response.Success(res, 200, "queried successfully", results);
    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};