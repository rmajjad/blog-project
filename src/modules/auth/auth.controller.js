import userModel from "../../../DB/model/user.model.js";

export const getAuth = (req, res) => {
    return res.json({ massege: "Auth" })
}

export const register = async (req, res) => {
    try {
        const { email, password, name , age } = req.body;
        const user = await userModel.create({ email, password, name , age });
        return res.json({ massege: "success", user });
    } catch (error) {
        if (error.original?.errno == 1062) {
            return res.json({ massege: "email already exists" });
        }
        return res.json({ massege: "error", error: error.stack });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const checkUser = await userModel.findOne({
        attributes: ['id', 'name'],
        where: {
            email,
            password
        }
    });
    if (!checkUser) {
        return res.json({ massege: "email or password is incorrect" });
    }
    return res.json({ massege: "success", user: checkUser });
}

