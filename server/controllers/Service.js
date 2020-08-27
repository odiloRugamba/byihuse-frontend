import Service from '../repos/Service';
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
            pictures
        } = req.body;
        const results = await Service.create(name, description, category, department, company, price, pictures);
        Response.Success(res, 200, "Created successfully", results);
    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};

exports.update = async (req, res) =>{
    try{
        const {
            name,
            description,
            company,
            price
        } = req.body;
        const {serviceId} = req.params;
        const results = await Service.update(serviceId, name, description, company, price);
        Response.Success(res, 200, "Updated successfully", results);

    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};


exports.getServiceDetails = async (req, res) =>{
    try{
        const {serviceId} = req.params;
        const results = await Service.getServiceDetails(serviceId);
        Response.Success(res, 200, "queried successfully", results);
    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};