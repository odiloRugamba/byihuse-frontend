import Product from '../models/Product';

exports.create = async (name, description, category, department, company, price, isMadeInRwanda, pictures) =>{
    try{
        const newProduct = await Product.create({
            name,
            description,
            category,
            department,
            company,
            price,
            isMadeInRwanda,
            pictures
        });
        return newProduct;
    }catch(err){
        throw err;
    }
};

exports.update = async (productId, name, description, company, price, isMadeInRwanda) => {
    try {
        return await Product.findByIdAndUpdate(
            {_id: productId},
            {name, description, company, price, isMadeInRwanda},
            (err, success) => {
                if(err){
                    console.log(err);
                    return false;
                }
                return success;
            }
        );
        
    } catch (error) {
        throw error;
    }
}

exports.getProductDetails = async (productId) => {
    try {
        return await Product.findById(productId)
                .populate('department')
                .populate('category')
                .populate('company')
                .exec()
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                })
    } catch (error) {
        throw error
    }
}
