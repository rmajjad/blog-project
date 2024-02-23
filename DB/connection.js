import Sequelize from 'sequelize';

export const sequelize = new Sequelize('blogsystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    });

    export const connectDB = async()=>{
        try{
            return await sequelize.sync({alter:false , force : false});
        }catch(err){
            console.log(`error is: ${err.message}`);
        }
    }
    
