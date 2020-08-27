import Company from '../repos/Company';
import Response from '../utils/Responses';

exports.create = async (req, res) =>{
    try{
        const {name, logo} = req.body;
        const results = await Company.create(name, logo);
        Response.Success(res, 200, "created successfully", results);
    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};

exports.update = async (req, res) =>{
    try{
        const {name, logo} = req.body;
        const {companyId} = req.params;
        const results = await Company.update(companyId, name, logo);
        Response.Success(res, 200, "Updated successfully", results);

    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};

exports.getCompanies = async (req, res) =>{
    try{
        const results = await Company.getCompanies();
        Response.Success(res, 200, "queried successfully", results);

    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};


