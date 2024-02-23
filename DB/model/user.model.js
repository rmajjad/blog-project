import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import blogModel from "./blog.model.js";

const userModel = sequelize.define('users', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age:{
        type: DataTypes.INTEGER,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    confirmEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, { 
    timestamps: true,
});

userModel.hasMany(blogModel,{
    foreignKey:'UserId',
    type: DataTypes.INTEGER,
});
blogModel.belongsTo(userModel);

export default userModel;

