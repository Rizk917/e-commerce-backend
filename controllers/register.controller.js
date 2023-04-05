import Register from "../models/register.model.js";

const getAll = async (req, res) =>{
    const all_register = await Register.find();

    res.json({
        message:"All register",
        status:200,
        data:all_register,
    })
}

const createRegister = async (req, res) =>{
    const register = new Register(req.body);
        const savedRegister = await register.save();
        res.json({
            message:"register created successfully",
            status:201,
            data:savedRegister,
        })

}

const getRegisterById = async (req, res) =>{
    const registerId = req.params.id;
        const register = await Register.findById(galleryId);
            res.json({
                message:"register found",
                status:200,
                data:register,
            })
        }


        const updateRegister = async (req, res) =>{
            const registerId = req.params.id;
                const updatedRegister = await Register.findByIdAndUpdate(registerId, req.body);
                res.json({
                    message:"register updated successfully",
                    status:200,
                    data:updatedRegister,
                })
            }


            const deleteRegister = async (req, res) =>{
                const registerId = req.params.id;
                    const deletedRegister = await Register.findByIdAndDelete(registerId);
                    res.json({
                        message:"register deleted successfully",
                        status:200,
                        data:deletedRegister,
                    })

                }
    







export default {getAll,createRegister,getRegisterById,updateRegister,deleteRegister}