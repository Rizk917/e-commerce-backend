import Partners from "../models/partners.model.js";

const getAll = async (req, res) =>{
    const all_partners = await Partners.find();

    res.json({
        message:"All partners",
        status:200,
        data:all_partners,
    })
}

const createPartners = async (req, res) =>{
    const partners = new Partners(req.body);
        const savedPartners = await partners.save();
        res.json({
            message:"partners created successfully",
            status:201,
            data:savedPartners,
        })

}

const getPartnersById = async (req, res) =>{
    const partnersId = req.params.id;
        const partners = await Partners.findById(partnersId);
            res.json({
                message:"partners found",
                status:200,
                data:partners,
            })
        }


        const updatePartners = async (req, res) =>{
            const partnersId = req.params.id;
                const updatedPartners = await Partners.findByIdAndUpdate(partnersId, req.body);
                res.json({
                    message:"partners updated successfully",
                    status:200,
                    data:updatedPartners,
                })
            }


            const deletePartners = async (req, res) =>{
                const partnersId = req.params.id;
                    const deletedPartners = await Partners.findByIdAndDelete(partnersId);
                    res.json({
                        message:"partners deleted successfully",
                        status:200,
                        data:deletedPartners,
                    })

                }
    







export default {getAll,createPartners,getPartnersById,updatePartners,deletePartners}