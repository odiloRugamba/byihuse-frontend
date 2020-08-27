import Rental from '../repos/Rental';
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
        const results = await Rental.create(name, description, category, department, company, price, isMadeInRwanda, pictures);
        Response.Success(res, 200, "Created successfully", results);
    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};

exports.update = async (req, res) =>{
    try{
        const {name, description, company, price, isMadeInRwanda} = req.body;
        const {rentalId} = req.params;
        const results = await Rental.update(rentalId, name, description, company, price, isMadeInRwanda);
        Response.Success(res, 200, "Updated successfully", results);

    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};


exports.getRentalDetails = async (req, res) =>{
    try{
        const {rentalId} = req.params;
        const results = await Rental.getRentalDetails(rentalId);
        Response.Success(res, 200, "queried successfully", results);
    }catch(err){
        console.log(err);
        Response.InternalServerError(res, "We are having issues! please try again soon")
    }
};