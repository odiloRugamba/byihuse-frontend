import Rental from '../models/Rental';

exports.create = async (name, description, category, department, company, price, isMadeInRwanda, pictures) =>{
    try{
        const newRental = await Rental.create({
            name,
            description,
            category,
            department,
            company,
            price,
            isMadeInRwanda,
            pictures
        });
        return newRental;
    }catch(err){
        throw err;
    }
};

exports.update = async (rentalId, name, description, company, price, isMadeInRwanda) => {
    try {
        return await Rental.findByIdAndUpdate(
            {_id: rentalId},
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

exports.getRentalDetails = async (rentalId) => {
    try {
        return await Rental.findById(rentalId)
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
