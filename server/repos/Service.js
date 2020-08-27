import Service from '../models/Service';

exports.create = async (name, description, category, department, company, price, pictures) =>{
    try{
        const newService = await Service.create({
            name,
            description,
            category,
            department,
            company,
            price,
            pictures
        });
        return newService;
    }catch(err){
        throw err;
    }
};

exports.update = async (serviceId, name, description, company, price) => {
    try {
        return await Service.findByIdAndUpdate(
            {_id: serviceId},
            {name, description, company, price},
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

exports.getServiceDetails = async (serviceId) => {
    try {
        return await Service.findById({id: serviceId})
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
