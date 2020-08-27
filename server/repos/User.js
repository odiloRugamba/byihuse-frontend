import User from '../models/User';

exports.create = async (firstName, lastName, email, password, role, assignedDepartments = null) =>{
    try{
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            role,
            assignedDepartments
        });
        return await newUser.save();
    }catch(err){
        throw err;
    }
};

exports.updateName = async (userId, firstName, lastName) => {
    try {
        return await User.findByIdAndUpdate(
            {_id: userId},
            { firstName, lastName},
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

exports.updateEmail = async (userId, email) => {
    try {
        return await User.findByIdAndUpdate(
            {_id: userId},
            {email},
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

exports.updatePassword = async (userId, password) => {
    try {
        return await User.findByIdAndUpdate(
            {_id: userId},
            {password},
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

exports.updateAssignedDepartments = async (userId, assignedDepartments) => {
    try {
        return await User.findByIdAndUpdate(
            {_id: userId},
            {assignedDepartments},
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

exports.getUserByEmail = async (email) => {
    try {
        return await User.findOne({email: email})
                .populate('assignedDepartments')
                .exec()
                .then(res => {
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                });
    } catch (error) {
        throw error
    }
}

exports.getUserById = async (userId) => {
    try {
        return await User.findById(userId)
                .populate('assignedDepartments')
                .exec()
                .then(res => {
                    console.log(res);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                });
    } catch (error) {
        throw error
    }
}
exports.getAllUsers = async (role) => {
    try {
        return await User.find({role: role})
                    .populate('assignedDepartments')
                    .exec()
                    .then(res => {
                        return res;
                    })
                    .catch(err => {
                        console.log(err);
                        return false;
                    });
    } catch (error) {
        throw error
    }
}