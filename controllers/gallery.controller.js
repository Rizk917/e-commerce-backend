import Gallery from "../models/gallery.model.js";

const getAll = async (req, res) =>{
    const all_gallery = await Gallery.find();

    res.json({
        message:"All gallery",
        status:200,
        data:all_gallery,
    })
}

const createGallery = async (req, res) =>{
    const gallery = new Gallery(req.body);
        const savedGallery= await gallery.save();
        res.json({
            message:"gallery created successfully",
            status:201,
            data:savedGallery,
        })

}

const getGalleryById = async (req, res) =>{
    const galleryId = req.params.id;
        const gallery = await Gallery.findById(galleryId);
            res.json({
                message:"gallery found",
                status:200,
                data:gallery,
            })
        }


        const updateGallery = async (req, res) =>{
            const galleryId = req.params.id;
                const updatedGallery = await Gallery.findByIdAndUpdate(galleryId, req.body);
                res.json({
                    message:"Gallery updated successfully",
                    status:200,
                    data:updatedGallery,
                })
            }


            const deleteGallery = async (req, res) =>{
                const galleryId = req.params.id;
                    const deletedGallery = await Gallery.findByIdAndDelete(galleryId);
                    res.json({
                        message:"Gallery deleted successfully",
                        status:200,
                        data:deletedGallery,
                    })

                }
    







export default {getAll,createGallery,getGalleryById,updateGallery,deleteGallery}