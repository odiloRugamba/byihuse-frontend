import Department from '../models/Department';
import Category from '../models/Category';
exports.create = async (name, offersServices, offersRental) =>{
    try{
        const newDepartment = await Department.create({name, offersServices, offersRental});
        return newDepartment;
    }catch(err){
        throw err;
    }
};

exports.update = async (departmentId, name, offersServices, offersRental) => {
    try {
        return await Department.findByIdAndUpdate(
            {_id: departmentId},
            {name, offersServices, offersRental},
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

exports.addCategory = async (departmentId, categoryId) => {
    try {
        return await Department.update(
            {_id: departmentId},
            {$push: {categories: categoryId}}
        );
        
    } catch (error) {
        throw error;
    }
}

exports.getAllDepartments = async () => {
    try {
        return await Department.find()
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

exports.getDepartmentCategories = async (departmentId) => {
    try {
        return await Department.findById(departmentId)
                .populate('categories')
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
