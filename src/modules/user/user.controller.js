import blogModel from "../../../DB/model/blog.model.js";
import userModel from "../../../DB/model/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await userModel.findAll({include:blogModel});
        return res.json({ massege: "success", users });
    } catch (error) {
        console.log(`the error is: ${error.message}`);
        return res.json({ massege: "error", error });
    }
};

export const update = async(req, res) => {
    try{
    const {id} = req.params;
    const {name} = req.body;

    const user = await userModel.update({name},{where:{id}}); 
    if(user == 0){
        return res.json({message: "user not found"});
    }
    return res.json({message:"success", user});
}catch(error){
    return res.json({message: "error", error:error.stack});
}
};

export const destroy = async (req, res) => {
    const {id} = req.params;
    const user = await userModel.destroy({
        where:{
            id
        }
    });
    if(!user){
        return res.json({massege:"user not found"});
    }
    return res.json({message:"success",user});
};