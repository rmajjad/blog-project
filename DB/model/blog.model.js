import { sequelize } from "../connection.js";
import {DataTypes} from "sequelize";

const blogModel = sequelize.define('blogs',{
    title:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    body:{
        type: DataTypes.TEXT,
        allowNull: false
    },
},{
    ttimestamps: true,
});

export default blogModel;